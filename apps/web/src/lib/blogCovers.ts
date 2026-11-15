import type {Picture} from '@sveltejs/enhanced-img'

const covers = import.meta.glob<Picture>('./images/blog/**/*.jpg', {
	eager: true,
	// width descriptors, so with `sizes` a phone fetches a phone-sized cover rather than the 2x desktop one
	query: {enhanced: true, w: '540;768;1080;1366;1920'},
	import: 'default',
})

/** Keyed by `<year>/<slug>`, matching a post's `_meta.path`. */
export const getBlogCover = (year: string, slug: string) => {
	const path = `./images/blog/${year}/${slug}.jpg`
	const cover = covers[path]

	// prerendering would otherwise hand `undefined` to `enhanced:img`
	if (!cover)
		throw new Error(`Missing cover for ${year}/${slug}: expected src/lib/${path.slice(2)}`)

	return cover
}
