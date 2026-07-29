import {error} from '@sveltejs/kit'

import {allPosts} from '#content'

import type {EntryGenerator, PageServerLoad} from './$types'

export const entries: EntryGenerator = () => allPosts.map(({year, slug}) => ({year, slug}))

export const load: PageServerLoad = async ({params}) => {
	const post = allPosts.find(({year, slug}) => year === params.year && slug === params.slug)

	if (!post) error(404, 'No such post... yet!')

	return {
		meta: {
			title: post.title,
			description: post.snippet,
			image: `/og/${post.year}/${post.slug}.png`,
		},
		post: {
			title: post.title,
			tags: post.tags,
			publishedAt: post.publishedAt,
			href: post.href,
			year: post.year,
			slug: post.slug,
			html: post.html,
		},
	}
}
