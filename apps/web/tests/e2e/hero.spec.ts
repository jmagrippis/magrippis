import {expect, type Page, test} from '@playwright/test'

import {titles} from '#lib/components/home/titles.js'

import {anyTitleTyped, FIRST_TITLE_TYPED, HEADLINE_NAME} from './headline'

test('on a small phone, a reader who prefers reduced motion starts the hero typing, then pauses it on a whole title', async ({
	page,
}) => {
	await page.emulateMedia({reducedMotion: 'reduce'})
	await page.setViewportSize({width: 320, height: 640})
	await page.goto('/')
	await expect(page.getByTestId('hydrated')).toBeVisible()

	// neither the nav nor the widest title pushes the page past the screen
	expect(
		await page.evaluate(
			() => document.documentElement.scrollWidth - document.documentElement.clientWidth,
		),
	).toBe(0)

	const hero = page.getByRole('heading', {level: 1})
	await expect(hero).toHaveAccessibleName(HEADLINE_NAME)
	const typedTitle = hero.locator('strong').last()
	await expect(typedTitle).toHaveText(FIRST_TITLE_TYPED)

	const play = page.getByRole('button', {name: 'Play typing animation'})
	const pause = page.getByRole('button', {name: 'Pause typing animation'})

	// from the keyboard, as Safari focuses no button on a click
	await play.press('Enter')
	await expect(pause).toBeFocused()
	// deleting starts within a keystroke, well inside the 1.5 s the autoplay lingers on a title
	await expect(typedTitle).not.toHaveText(FIRST_TITLE_TYPED, {timeout: 1_000})
	await expect(hero).toHaveAccessibleName(HEADLINE_NAME)

	// mid-word, yet the pause shows a whole title
	await pause.press('Enter')
	await expect(play).toBeFocused()
	await expect(typedTitle).toHaveText(anyTitleTyped(titles))
})

const watchLayoutShifts = (page: Page) =>
	page.evaluateHandle(() => {
		const values: number[] = []
		new PerformanceObserver((list) => {
			for (const entry of list.getEntries()) {
				if ('value' in entry && typeof entry.value === 'number') values.push(entry.value)
			}
		}).observe({type: 'layout-shift'})
		return values
	})

// a pause, the first title deleted, then the next typed out in full
const typeTheNextTitle = (page: Page) =>
	expect(page.getByRole('heading', {level: 1}).locator('strong').last()).toHaveText(
		anyTitleTyped(titles.slice(1)),
		{timeout: 10_000},
	)

test('the hero deletes its title and types the next without shifting the page', async ({
	page,
	browserName,
}) => {
	test.skip(browserName !== 'chromium', 'only Chromium reports layout shifts')

	// a phone, where the headline takes the full width
	await page.setViewportSize({width: 412, height: 823})
	await page.goto('/')
	await expect(page.getByTestId('hydrated')).toBeVisible()
	await page.evaluate(() => document.fonts.ready)

	const layoutShifts = await watchLayoutShifts(page)
	await typeTheNextTitle(page)

	expect(await layoutShifts.jsonValue()).toEqual([])
})

test('on a small phone, a reader who doubled their text size gets a header and headline that grow to fit', async ({
	page,
	browserName,
}) => {
	test.skip(browserName !== 'chromium', 'only Chromium takes a default font size from Playwright')

	const devTools = await page.context().newCDPSession(page)
	await devTools.send('Page.setFontSizes', {fontSizes: {standard: 32, fixed: 26}})
	await page.setViewportSize({width: 320, height: 640})
	await page.goto('/')
	await expect(page.getByTestId('hydrated')).toBeVisible()
	await page.evaluate(() => document.fonts.ready)

	// the header wraps its links and grows around them, and the headline wraps its titles,
	// rather than either pushing past the screen
	const header = page.getByRole('banner')
	const headline = page.getByRole('heading', {level: 1})
	const overflowPastScreen = () =>
		page.evaluate(() =>
			Math.max(
				0,
				...[...document.querySelectorAll('header, header *, h1, h1 *')].map(
					(element) => element.getBoundingClientRect().right - document.documentElement.clientWidth,
				),
			),
		)
	expect(await overflowPastScreen()).toBe(0)

	const headerBottom = await header.evaluate((element) => element.getBoundingClientRect().bottom)
	for (const link of await page.getByRole('navigation').getByRole('link').all()) {
		expect(
			await link.evaluate((element) => element.getBoundingClientRect().bottom),
		).toBeLessThanOrEqual(headerBottom)
	}
	expect(
		await headline.evaluate((element) => parseFloat(getComputedStyle(element).fontSize)),
	).toBeGreaterThanOrEqual(36)

	const layoutShifts = await watchLayoutShifts(page)
	await typeTheNextTitle(page)

	expect(await layoutShifts.jsonValue()).toEqual([])
	expect(await overflowPastScreen()).toBe(0)
})
