import {expect, test} from '@playwright/test'

test('the “Other work” column zig-zags, each item a full row', async ({page}) => {
	await page.setViewportSize({width: 1600, height: 1200})
	await page.goto('/')
	await expect(page.getByTestId('hydrated')).toBeVisible()

	const items = page.getByRole('article').filter({has: page.getByRole('heading', {level: 3})})
	await expect(items).toHaveCount(5)

	// guards the trap that layout classes on `enhanced:img` land on the inner
	// `<img>` and are silently dropped, collapsing every item into one column
	for (const [index, item] of (await items.all()).entries()) {
		const picture = item.locator('picture')
		const heading = item.getByRole('heading', {level: 3})

		const pictureBox = await picture.boundingBox()
		const headingBox = await heading.boundingBox()
		expect(pictureBox, 'picture should be laid out').toBeTruthy()
		expect(headingBox, 'heading should be laid out').toBeTruthy()

		// the picture takes the wider share of the row
		expect(pictureBox!.width).toBeGreaterThan(headingBox!.width)

		const pictureIsLeft = pictureBox!.x < headingBox!.x
		expect(
			pictureIsLeft,
			`item ${index + 1} should have its picture on the ${index % 2 === 0 ? 'left' : 'right'}`,
		).toBe(index % 2 === 0)
	}
})

test('the hero avatar shares its row with the heading', async ({page}) => {
	await page.setViewportSize({width: 1600, height: 1200})
	await page.goto('/')
	await expect(page.getByTestId('hydrated')).toBeVisible()

	const heading = page.getByRole('heading', {level: 1})
	const avatar = page.locator('picture').first()

	const headingBox = await heading.boundingBox()
	const avatarBox = await avatar.boundingBox()

	// side by side, not stacked
	expect(avatarBox!.x + avatarBox!.width).toBeLessThanOrEqual(headingBox!.x + 1)
	// and actually spanning its columns rather than collapsing to one
	expect(avatarBox!.width).toBeGreaterThan(150)
})
