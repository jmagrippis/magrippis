import {expect, test} from '@playwright/test'

import {SITE_URL} from '#lib/constants.js'

test.skip(
	({baseURL}) => new URL('/', baseURL).origin !== SITE_URL,
	'only production is behind Cloudflare’s proxy, Redirect Rules and Web Analytics',
)

test('the site answers from Cloudflare, which injects the Web Analytics beacon', async ({
	request,
}) => {
	// Cloudflare injects the beacon only when the request accepts HTML
	const response = await request.get('/', {headers: {accept: 'text/html'}})

	expect(response.headers()['server']).toBe('cloudflare')
	expect(await response.text()).toContain('https://static.cloudflareinsights.com/beacon.min.js')
})

test('www redirects to the bare domain, keeping the path', async ({request}) => {
	const postPath = '/blog/2023/next-learn-with-next-14'
	const wwwPostUrl = new URL(postPath, SITE_URL)
	wwwPostUrl.hostname = `www.${wwwPostUrl.hostname}`

	const response = await request.get(wwwPostUrl.href, {maxRedirects: 0})

	expect(response.status()).toBe(301)
	expect(response.headers()['location']).toBe(new URL(postPath, SITE_URL).href)
})
