import {defineCollection, defineConfig} from '@content-collections/core'
import {z} from 'zod'

import {markdownToHtml} from '../src/lib/markdown'

const posts = defineCollection({
	name: 'posts',
	directory: 'blog',
	include: '**/*.md',
	parser: 'frontmatter',
	schema: z.object({
		title: z.string(),
		snippet: z.string(),
		publishedAt: z.iso.datetime(),
		tags: z.array(z.string()),
		content: z.string(),
	}),
	transform: async (post) => {
		const [year, slug, ...rest] = post._meta.path.split('/')

		// otherwise a stray file yields a live but broken `/blog/<name>/undefined`
		if (!slug || rest.length) {
			throw new Error(`Expected content/blog/<year>/<slug>.md, got ${post._meta.path}.md`)
		}

		return {
			...post,
			year,
			slug,
			href: `/blog/${year}/${slug}`,
			html: await markdownToHtml(post.content),
		}
	},
})

export default defineConfig({content: [posts]})
