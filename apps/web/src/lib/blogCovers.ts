import type {Picture} from '@sveltejs/enhanced-img'

const covers = import.meta.glob<Picture>('./images/blog/**/*.jpg', {
	eager: true,
	query: {enhanced: true},
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
