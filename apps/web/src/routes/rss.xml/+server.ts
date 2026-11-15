import {Feed} from 'feed'

import {allPosts} from '#content'
import {SITE_DESCRIPTION, SITE_LANGUAGE, SITE_NAME, SITE_URL} from '#lib/constants.js'
import {markdownToHtml} from '#lib/server/markdown.js'

export const prerender = true

export const GET = async () => {
	const feed = new Feed({
		title: SITE_NAME,
		description: SITE_DESCRIPTION,
		id: SITE_URL,
		link: SITE_URL,
		language: SITE_LANGUAGE,
		image: `${SITE_URL}/og/home.png`,
		favicon: `${SITE_URL}/favicon.ico`,
		copyright: `All rights reserved, ${SITE_NAME}`,
		feedLinks: {rss: `${SITE_URL}/rss.xml`},
		author: {name: SITE_NAME, link: SITE_URL},
	})

	const newestFirst = [...allPosts].sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1))

	for (const post of newestFirst) {
		feed.addItem({
			title: post.title,
			id: `${SITE_URL}${post.href}`,
			link: `${SITE_URL}${post.href}`,
			description: post.snippet,
			// the HTML the page renders, with absolute image URLs: Shiki's inline styles
			// mean it survives in a reader or an email with no stylesheet
			content: await markdownToHtml(post.content, {
				directory: post._meta.directory,
				origin: SITE_URL,
			}),
			date: new Date(post.publishedAt),
			image: `${SITE_URL}/og/${post.year}/${post.slug}.png`,
			category: post.tags.map((name) => ({name})),
		})
	}

	return new Response(feed.rss2(), {
		headers: {'Content-Type': 'application/rss+xml; charset=utf-8'},
	})
}
