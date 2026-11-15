import {expect, test} from '@playwright/test'

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
