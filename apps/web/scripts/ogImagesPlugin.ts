import {mkdir, readFile, readdir, writeFile} from 'node:fs/promises'
import path from 'node:path'

import matter from 'gray-matter'
import type {Plugin} from 'vite'

import {homeCard, postCard, renderOgImage} from './ogImage'

const CONTENT_DIR = 'content/blog'
const OUT_DIR = 'static/og'
const FONT_PATH = 'src/lib/fonts/Trispace-Regular.ttf'

const collectMarkdown = async (dir: string): Promise<string[]> => {
	const entries = await readdir(dir, {withFileTypes: true})

	const nested = await Promise.all(
		entries.map(async (entry) => {
			const full = path.join(dir, entry.name)
			if (entry.isDirectory()) return collectMarkdown(full)
			return entry.name.endsWith('.md') ? [full] : []
		}),
	)

	return nested.flat()
}

// always re-rendered rather than skipped when present: a card has to follow its
// post's title, and `static/og` is gitignored so CI would disagree with local
const writeCard = async (target: string, render: () => Promise<Buffer>) => {
	await mkdir(path.dirname(target), {recursive: true})
	await writeFile(target, await render())
}

// Frontmatter is read off disk rather than through content-collections: this
// must run before SvelteKit copies `static/`, so plugin order stays irrelevant.
export const ogImages = (): Plugin => ({
	name: 'magrippis-og-images',
	// `buildStart` fires per environment, so without this both client and ssr
	// render every card and race to write the same files
	applyToEnvironment: (environment) => environment.name === 'client',
	async buildStart() {
		const font = await readFile(FONT_PATH)

		await writeCard(path.join(OUT_DIR, 'home.png'), () => renderOgImage(homeCard(), font))

		const posts = await collectMarkdown(CONTENT_DIR)

		for (const file of posts) {
			const {data} = matter(await readFile(file, 'utf-8'))
			const relative = path.relative(CONTENT_DIR, file).replace(/\.md$/, '')

			await writeCard(path.join(OUT_DIR, `${relative}.png`), () =>
				renderOgImage(postCard(String(data.title)), font),
			)
		}

		console.info(`[og-images] rendered ${posts.length + 1} open-graph cards`)
	},
})
