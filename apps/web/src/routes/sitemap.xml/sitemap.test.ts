import {describe, expect, it} from 'vite-plus/test'

import {allPosts} from '#content'
import {SITE_URL} from '#lib/constants.js'

import {GET} from './+server'

describe('the sitemap', () => {
	it('lists every page, and only those, at its canonical address', async () => {
		const xml = await (await GET()).text()
		const listed = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, loc]) => loc)

		const pages = ['/', '/about', '/blog', ...allPosts.map(({href}) => href)]

		expect(listed.toSorted()).toEqual(pages.map((path) => `${SITE_URL}${path}`).toSorted())
	})
})
