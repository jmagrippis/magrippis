import {allPosts} from '#content'
import {SITE_URL} from '#lib/constants.js'

export const prerender = true

const STATIC_PATHS = ['/', '/about', '/blog']

const urlEntry = (path: string, lastmod?: string) =>
	[
		'\t<url>',
		`\t\t<loc>${SITE_URL}${path}</loc>`,
		lastmod ? `\t\t<lastmod>${lastmod.slice(0, 10)}</lastmod>` : '',
		'\t</url>',
	]
		.filter(Boolean)
		.join('\n')

export const GET = async () => {
	const entries = [
		...STATIC_PATHS.map((path) => urlEntry(path)),
		...allPosts.map((post) => urlEntry(post.href, post.publishedAt)),
	]

	const xml = [
		'<?xml version="1.0" encoding="UTF-8" ?>',
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
		...entries,
		'</urlset>',
	].join('\n')

	return new Response(xml, {
		headers: {'Content-Type': 'application/xml; charset=utf-8'},
	})
}
