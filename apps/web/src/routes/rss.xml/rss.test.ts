import {describe, expect, it} from 'vite-plus/test'

import {allPosts} from '#content'
import {SITE_URL} from '#lib/constants.js'
import {markdownToHtml} from '#lib/server/markdown.js'

import {GET} from './+server'

describe('the RSS feed', () => {
	it('carries every post whole, at its canonical address', async () => {
		const xml = await (await GET()).text()

		for (const post of allPosts) {
			const html = await markdownToHtml(post.content, {
				directory: post._meta.directory,
				origin: SITE_URL,
			})
			expect(xml).toContain(`<link>${SITE_URL}${post.href}</link>`)
			expect(xml).toContain(`<content:encoded><![CDATA[${html}]]></content:encoded>`)
		}
	})

	it('colours code inline, since no stylesheet travels with a feed', async () => {
		const xml = await (await GET()).text()

		expect(xml).toMatch(/<pre class="shiki[^"]*" style="background-color:/)
	})

	it('points every image at the site, since a reader resolves no relative URL', async () => {
		const xml = await (await GET()).text()

		const imageUrls = [...xml.matchAll(/ (?:src|srcset)="([^"]+)"/g)].flatMap(([, value]) =>
			value.split(', ').map((candidate) => candidate.split(' ')[0]),
		)
		expect(imageUrls.length).toBeGreaterThan(0)
		for (const url of imageUrls) {
			expect(url).toMatch(new RegExp(`^${RegExp.escape(SITE_URL)}/`))
		}
	})
})
