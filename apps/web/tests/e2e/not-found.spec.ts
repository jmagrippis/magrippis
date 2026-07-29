import {readFile} from 'node:fs/promises'

import {expect, test} from '@playwright/test'

test('a wrong address gets a real page, not a blank one', async ({page}) => {
	const response = await page.goto('/definitely-not-a-page')
	expect(response?.status()).toBe(404)

	await expect(page.getByRole('heading', {name: 'Lost?', level: 1})).toBeVisible()
	await expect(page.getByRole('link', {name: 'Read the blog'})).toBeVisible()
})

test('the 404 Cloudflare serves has content without running any JS', async () => {
	/*
		`not_found_handling: "404-page"` serves this file verbatim. An SPA fallback
		would leave it an empty shell: fine in dev, blank for crawlers and for
		anyone whose JS has not booted.
	*/
	const html = await readFile('build/404.html', 'utf-8')

	expect(html).toContain('Lost?')
	expect(html).toMatch(/<title>[^<]+<\/title>/)
})
