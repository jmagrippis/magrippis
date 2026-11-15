import {expect, test} from '@playwright/test'

import {YOUTUBE_CHANNEL_URL} from '#lib/constants.js'

test('the feed and the sitemap carry the Content-Type from `_headers`', async ({request}) => {
	// prerendering drops a route's own Content-Type, so these come from `static/_headers`
	const feed = await request.get('/rss.xml')
	expect(feed.headers()['content-type']).toBe('application/rss+xml; charset=utf-8')

	const sitemap = await request.get('/sitemap.xml')
	expect(sitemap.headers()['content-type']).toBe('application/xml; charset=utf-8')
})

test('the /tube short link redirects to the YouTube channel', async ({request}) => {
	// not followed, so this checks our redirect rather than YouTube
	const response = await request.get('/tube', {maxRedirects: 0})

	expect(response.status()).toBe(302)
	expect(response.headers()['location']).toBe(YOUTUBE_CHANNEL_URL)
})

test('a wrong address answers 404 with the real 404 page', async ({request}) => {
	const response = await request.get('/blog/2023/no-such-post')

	expect(response.status()).toBe(404)
	// an SPA fallback would serve an empty shell: blank for crawlers and for anyone whose JS has not booted
	expect(await response.text()).toContain('Read the blog')
})
