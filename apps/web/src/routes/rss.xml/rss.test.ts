import {describe, expect, it, vi} from 'vite-plus/test'

import {allPosts} from '#content'
import {SITE_URL} from '#lib/constants.js'
import {markdownToHtml} from '#lib/server/markdown.js'

import {GET} from './+server'

// one post with code, stills and animations meets everything the feed does to a post
vi.mock('#content', async (importOriginal) => {
	const content = await importOriginal<typeof import('#content')>()
	return {
		...content,
		allPosts: content.allPosts.filter(
			({slug}) => slug === 'how-to-BDD-and-E2E-test-your-responsive-web-app-with-Cypress',
		),
	}
})

describe('the RSS feed', () => {
	it(
		'gives a reader the whole post at its canonical address, its code coloured inline and its images on the site',
		{timeout: 10_000},
		async () => {
			const [post] = allPosts
			const xml = await (await GET()).text()

			expect(xml).toContain(`<link>${SITE_URL}${post.href}</link>`)
			const html = await markdownToHtml(post.content, {
				directory: post._meta.directory,
				origin: SITE_URL,
			})
			expect(xml).toContain(`<content:encoded><![CDATA[${html}]]></content:encoded>`)
			expect(xml).toMatch(/<pre class="shiki[^"]*" style="background-color:/)

			const imageUrls = [...xml.matchAll(/ (?:src|srcset)="([^"]+)"/g)].flatMap(([, value]) =>
				value.split(', ').map((candidate) => candidate.split(' ')[0]),
			)
			expect(imageUrls.length).toBeGreaterThan(0)
			for (const url of imageUrls) {
				expect(url).toMatch(new RegExp(`^${RegExp.escape(SITE_URL)}/`))
			}
		},
	)
})
