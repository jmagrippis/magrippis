import {expect, test} from '@playwright/test'

test('a mistyped post address gets a working 404 page, with a way onward', async ({page}) => {
	await page.goto('/blog/2023/no-such-post')
	await expect(page.getByTestId('hydrated')).toBeVisible()

	await expect(page.getByRole('heading', {name: 'Lost?', level: 1})).toBeVisible()

	await page.getByRole('link', {name: 'Read the blog'}).click()
	await expect(page.getByRole('heading', {name: 'Blog', level: 1})).toBeVisible()
})
