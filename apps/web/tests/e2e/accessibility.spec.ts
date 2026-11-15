import AxeBuilder from '@axe-core/playwright'
import {expect, test} from '@playwright/test'

const routes = [
	'/',
	'/about',
	'/blog',
	'/404',
	'/blog/2023/next-learn-with-next-14',
	'/blog/2020/how-to-BDD-and-E2E-test-your-responsive-web-app-with-Cypress',
]

for (const route of routes) {
	test(`"${route}" has no accessibility violations`, async ({page}) => {
		await page.goto(route)
		await expect(page.getByTestId('hydrated')).toBeVisible()
		await expect(page.getByRole('heading', {level: 1})).toBeVisible()
		// mid-fade, a relative date reads as low contrast; the cursor's endless blink never settles
		await page.evaluate(() =>
			Promise.all(
				document
					.getAnimations()
					.filter((animation) => animation.effect?.getTiming().iterations !== Infinity)
					.map((animation) => animation.finished),
			),
		)

		const {violations} = await new AxeBuilder({page}).analyze()

		// summarised rather than raw: a single axe violation object is hundreds of
		// lines of diff, which buries which rule actually broke and where
		expect(
			violations.map(({id, nodes}) => ({
				id,
				targets: nodes.map(({target}) => target.join(' ')),
			})),
		).toEqual([])
	})

	test(`"${route}" has exactly one h1`, async ({page}) => {
		await page.goto(route)
		await expect(page.getByTestId('hydrated')).toBeVisible()

		await expect(page.getByRole('heading', {level: 1})).toHaveCount(1)
	})
}
