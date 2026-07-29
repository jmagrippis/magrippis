import {Feed} from 'feed'

import {allPosts} from '#content'
import {SITE_DESCRIPTION, SITE_NAME, SITE_URL} from '#lib/constants'

export const prerender = true

export const GET = async () => {
	const feed = new Feed({
		title: SITE_NAME,
		description: SITE_DESCRIPTION,
		id: SITE_URL,
		link: SITE_URL,
		language: 'en',
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
			// the same self-contained HTML the page renders — Shiki's inline styles
			// mean it survives in a reader or an email with no stylesheet
			content: post.html,
			date: new Date(post.publishedAt),
			image: `${SITE_URL}/og/${post.year}/${post.slug}.png`,
			category: post.tags.map((name) => ({name})),
		})
	}

	return new Response(feed.rss2(), {
		headers: {'Content-Type': 'application/rss+xml; charset=utf-8'},
	})
}
