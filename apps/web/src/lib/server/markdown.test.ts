import {describe, expect, it} from 'vite-plus/test'

import {markdownToHtml} from './markdown'

const ON_THE_SITE = {origin: ''}

describe('a post’s images', () => {
	it(
		'serve a still at its own size, with smaller widths for smaller screens, and an animation as committed, both from the site and lazily',
		{timeout: 10_000},
		async () => {
			const html = await markdownToHtml(
				[
					'![](./how-to-BDD-and-E2E-test-your-responsive-web-app-with-Cypress/figma.jpg)',
					'',
					'> ![a nested animation](./how-to-BDD-and-E2E-test-your-responsive-web-app-with-Cypress/strap-in.webp)',
				].join('\n'),
				{...ON_THE_SITE, directory: '2020'},
			)

			const [still, animation] = html.split('<blockquote>')
			expect(still).toMatch(
				/<source srcset="[^"]+ 540w, [^"]+ 1560w" sizes="[^"]+" type="image\/avif">/,
			)
			expect(still).toMatch(/<img [^>]*width="1560" height="768"/)
			expect(animation).toMatch(
				/<img src="[^"]+strap-in\.webp" alt="a nested animation"[^>]* width="500" height="372">/,
			)
			expect(animation).not.toContain('<picture>')
			for (const [image] of html.matchAll(/<img [^>]*>/g)) {
				expect(image).toMatch(/ src="\/[^/]/)
				expect(image).toContain('loading="lazy"')
				expect(image).toContain('decoding="async"')
			}
		},
	)

	it('fail the build rather than ship one the site cannot serve', async () => {
		for (const src of [
			'https://media.giphy.com/media/jZh1hRsLJJk6Q/giphy.gif',
			'./how-to-BDD-and-E2E-test-your-responsive-web-app-with-Cypress/strap-in.gif',
		]) {
			await expect(
				markdownToHtml(`![](${src})`, {...ON_THE_SITE, directory: '2020'}),
			).rejects.toThrow(`${src}: a post's images sit next to it`)
		}
	})
})
