import {allPosts} from '#content'

import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async () => ({
	meta: {
		title: 'Blog',
		description:
			'Read the latest blogposts by Johnny, which include in-depth tutorials and guides for Typescript, Svelte, React, SvelteKit and Next.js!.. And sometimes more random thoughts you won’t see quoted in Stack Overflow 😛',
	},
	// not spreading the post: `content` is the whole article, and six of them have
	// no business reaching the client for an index
	posts: allPosts
		.map(({title, snippet, publishedAt, tags, year, slug, href}) => ({
			title,
			snippet,
			publishedAt,
			tags,
			year,
			slug,
			href,
		}))
		.sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1)),
})
