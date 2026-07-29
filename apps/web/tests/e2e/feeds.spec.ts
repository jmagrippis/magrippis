import {expect, test} from '@playwright/test'

test('the RSS feed carries whole posts, not just snippets', async ({request}) => {
	const response = await request.get('/rss.xml')
	expect(response.status()).toBe(200)
	// only "some flavour of XML": prerendering drops the route's own Content-Type,
	// and `static/_headers` restores it on Cloudflare, which preview does not honour
	expect(response.headers()['content-type']).toContain('xml')

	const xml = await response.text()

	expect(xml).toContain('<title>Johnny Magrippis</title>')
	expect(xml).toContain('https://magrippis.com/blog/2023/next-learn-with-next-14')

	// the full article, with Shiki's colours inlined rather than in a stylesheet
	// that never travels with the feed
	expect(xml).toContain('content:encoded')
	expect(xml).toMatch(/<pre class="shiki[^"]*" style="background-color:/)
})

test('the sitemap lists every page', async ({request}) => {
	const response = await request.get('/sitemap.xml')
	expect(response.status()).toBe(200)

	const xml = await response.text()

	for (const path of ['/', '/about', '/blog', '/blog/2021/how-to-use-tailwind-with-sveltekit']) {
		expect(xml).toContain(`<loc>https://magrippis.com${path}</loc>`)
	}

	// prerendered from a fake origin unless we build them ourselves
	expect(xml).not.toContain('sveltekit-prerender')
	expect(xml).not.toContain('localhost')
})

test('pages advertise their canonical URL and social card', async ({page}) => {
	await page.goto('/blog/2023/next-learn-with-next-14')
	await expect(page.getByTestId('hydrated')).toBeVisible()

	const canonical = page.locator('link[rel="canonical"]')
	await expect(canonical).toHaveAttribute(
		'href',
		'https://magrippis.com/blog/2023/next-learn-with-next-14',
	)

	await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
		'content',
		'https://magrippis.com/og/2023/next-learn-with-next-14.png',
	)
})
