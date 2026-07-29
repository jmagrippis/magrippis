import {expect, test} from '@playwright/test'

test('a reader who prefers light mode toggles it, and it sticks', async ({page}) => {
	await page.goto('/')
	await expect(page.getByTestId('hydrated')).toBeVisible()

	const html = page.locator('html')
	await expect(html).toHaveAttribute('data-theme', 'dark')

	await page.getByRole('button', {name: 'toggle light/dark theme'}).click()
	await expect(html).toHaveAttribute('data-theme', 'light')

	await page.reload()
	await expect(page.getByTestId('hydrated')).toBeVisible()
	await expect(html).toHaveAttribute('data-theme', 'light')
})
