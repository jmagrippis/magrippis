import {test, expect} from '@playwright/test'

test('navigation smoke test', async ({page}) => {
	// start at the home page
	await page.goto('/')

	await expect(
		page.getByRole('heading', {name: 'jmagrippis', level: 1}),
	).toBeVisible()
	await expect(page).toHaveTitle(/Johnny Magrippis | jmagrippis/)

	// navigate to the About Page
	await page.getByRole('navigation').getByRole('link', {name: 'about'}).click()
	await expect(
		page.getByRole('heading', {name: 'About', level: 1}),
	).toBeVisible()
	await expect(page).toHaveTitle(/About/)

	// navigate to the Blog Page
	await page.getByRole('navigation').getByRole('link', {name: 'blog'}).click()
	await expect(
		page.getByRole('heading', {name: 'Blog', level: 1}),
	).toBeVisible()
	await expect(page).toHaveTitle(/Blog/)

	// navigate to the whichever is the latest blogpost
	const firstBlogpost = page.getByRole('heading', {level: 2}).first()
	const title = await firstBlogpost.textContent()
	expect(title).not.toBeNull()
	const titleRegex = new RegExp(title as string)

	await firstBlogpost.click()
	await expect(
		page.getByRole('heading', {name: titleRegex, level: 1}),
	).toBeVisible()
	await expect(page).toHaveTitle(titleRegex)
})
