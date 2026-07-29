import {expect, test} from '@playwright/test'

test('a reader explores the site and shares the latest post', async ({page}) => {
	await page.goto('/')
	await expect(page.getByTestId('hydrated')).toBeVisible()

	await expect(page.getByRole('heading', {level: 1})).toContainText('Johnny')
	await expect(page).toHaveTitle(/Johnny Magrippis/)

	// the hero types itself out: server-rendered complete, then animated
	const typedTitle = page.getByRole('heading', {level: 1}).locator('strong').last()
	await expect(typedTitle).not.toHaveText('engineer')

	const nav = page.getByRole('navigation')

	await nav.getByRole('link', {name: 'about'}).click()
	await expect(page.getByRole('heading', {name: 'About', level: 1})).toBeVisible()
	await expect(page).toHaveTitle(/About/)
	await expect(page.getByRole('heading', {name: 'The Stack', level: 2})).toBeVisible()

	await nav.getByRole('link', {name: 'blog'}).click()
	await expect(page.getByRole('heading', {name: 'Blog', level: 1})).toBeVisible()
	await expect(page).toHaveTitle(/Blog/)

	// whichever post is newest, rather than pinning the test to today's content
	const latestPost = page.getByRole('heading', {level: 2}).first()
	const latestTitle = (await latestPost.textContent())?.trim()
	expect(latestTitle).toBeTruthy()

	await latestPost.getByRole('link').click()

	await expect(page.getByRole('heading', {level: 1})).toHaveText(latestTitle!)
	expect(await page.title()).toContain(latestTitle!)

	// the sharing hub every post ends with
	const shareHub = page.getByRole('complementary')
	await expect(shareHub).toContainText('sharing is caring')
	await expect(shareHub.getByRole('link', {name: 'tweet'})).toHaveAttribute(
		'href',
		/twitter\.com\/intent\/tweet/,
	)

	await page.getByRole('link', {name: 'Check out all posts'}).click()
	await expect(page.getByRole('heading', {name: 'Blog', level: 1})).toBeVisible()
})

test('a reader copies a post’s link to share it', async ({page, context, browserName}) => {
	// only Chromium exposes the clipboard permissions to grant
	const canReadClipboard = browserName === 'chromium'
	if (canReadClipboard) {
		await context.grantPermissions(['clipboard-read', 'clipboard-write'])
	}

	await page.goto('/blog/2023/next-learn-with-next-14')
	await expect(page.getByTestId('hydrated')).toBeVisible()

	const shareHub = page.getByRole('complementary')
	await shareHub.getByRole('button', {name: 'copy link'}).click()

	await expect(shareHub.getByRole('button', {name: 'copied!'})).toBeVisible()

	if (canReadClipboard) {
		expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
			'https://magrippis.com/blog/2023/next-learn-with-next-14',
		)
	}
})

test('every post is reachable and renders highlighted code', async ({page}) => {
	await page.goto('/blog/2021/how-to-use-tailwind-with-sveltekit')
	await expect(page.getByTestId('hydrated')).toBeVisible()

	await expect(
		page.getByRole('heading', {name: 'How to use Tailwind.css with SvelteKit', level: 1}),
	).toBeVisible()

	// Shiki runs at build time with a single theme and inline styles, so the
	// markup has to carry its own colours with no stylesheet to lean on
	const codeBlock = page.locator('pre.shiki').first()
	await expect(codeBlock).toBeVisible()
	await expect(codeBlock).toHaveAttribute('style', /background-color/)
})
