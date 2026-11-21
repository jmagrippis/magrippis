import path from 'node:path'

import rehypeShiki from '@shikijs/rehype'
import type {Picture} from '@sveltejs/enhanced-img'
import type {Element, Root} from 'hast'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkSmartypants from 'remark-smartypants'
import sharp from 'sharp'
import {unified} from 'unified'

import {MAX_PLAYING_MS, playingMs} from '#lib/animationLimit.js'
import {proseColumnSizes} from '#lib/sharedClasses.js'
import {accessibleDracula} from '#lib/shikiTheme.js'

const POSTS_DIRECTORY = '/content/blog'

// width descriptors, so with `sizes` a phone fetches a phone-sized still rather than the desktop one
const stills = import.meta.glob<Picture>('/content/blog/**/*.{jpg,png}', {
	eager: true,
	query: {enhanced: true, w: '540;768;1080;1366;1920'},
	import: 'default',
})

// enhanced-img would keep only an animation's first frame, so animations are committed as WebP and served as they are.
// No query, not even `?url`: vite-imagetools re-encodes any image imported with one
const animations = import.meta.glob<string>('/content/blog/**/*.webp', {
	eager: true,
	import: 'default',
})

// less the post body's `px-2`
const STILL_SIZES = proseColumnSizes(16)

const toPicture = (image: Element, still: Picture, origin: string): Element => ({
	type: 'element',
	tagName: 'picture',
	properties: {},
	children: [
		...Object.entries(still.sources).map(([format, srcset]): Element => ({
			type: 'element',
			tagName: 'source',
			properties: {
				srcSet: srcset
					.split(', ')
					.map((candidate) => `${origin}${candidate}`)
					.join(', '),
				sizes: STILL_SIZES,
				type: `image/${format}`,
			},
			children: [],
		})),
		{
			...image,
			properties: {
				...image.properties,
				src: `${origin}${still.img.src}`,
				width: still.img.w,
				height: still.img.h,
			},
		},
	],
})

const toAnimation = async (
	image: Element,
	file: string,
	url: string,
	origin: string,
): Promise<Element> => {
	// glob keys start at the Vite root, the app folder every build and test runs in
	const {
		width,
		pageHeight,
		height,
		pages = 1,
		delay = [],
		loop = 0,
	} = await sharp(path.join(process.cwd(), file)).metadata()
	if (pages < 2) {
		throw new Error(
			`${file} is a still: commit it as JPEG or PNG, so enhanced-img serves it in AVIF and WebP at each width`,
		)
	}
	if (playingMs(delay, loop) > MAX_PLAYING_MS) {
		throw new Error(
			`${file} plays for over ${MAX_PLAYING_MS} ms: convert it with scripts/gifToWebp.ts, which sets a loop count that stops it in time`,
		)
	}

	return {
		...image,
		properties: {...image.properties, src: `${origin}${url}`, width, height: pageHeight ?? height},
	}
}

type ImageOptions = {
	/** The post's folder under `content/blog`, which its images' paths are relative to. */
	directory: string
	/** Prefixed to every image URL, since a feed reader needs absolute ones. */
	origin: string
}

// A post's images reserve their space and load lazily: they sit below its cover, which they would otherwise outbid for bandwidth
const servePostImages =
	({directory, origin}: ImageOptions) =>
	async (tree: Root) => {
		const replacements: Promise<void>[] = []

		const visit = (node: Root | Element) => {
			node.children.forEach((child, index) => {
				if (child.type !== 'element') return
				if (child.tagName !== 'img') return visit(child)

				const src = String(child.properties.src)
				const file = path.posix.join(POSTS_DIRECTORY, directory, src)
				const image: Element = {
					...child,
					properties: {...child.properties, loading: 'lazy', decoding: 'async'},
				}
				const still = stills[file]
				const animation = animations[file]

				if (still) {
					node.children[index] = toPicture(image, still, origin)
				} else if (animation) {
					replacements.push(
						toAnimation(image, file, animation, origin).then((served) => {
							node.children[index] = served
						}),
					)
				} else {
					throw new Error(
						`${src}: a post's images sit next to it, as JPEG or PNG stills or WebP animations. Convert a GIF from apps/web: node scripts/gifToWebp.ts <source.gif> <destination.webp> [width]`,
					)
				}
			})
		}
		visit(tree)

		await Promise.all(replacements)
	}

// one theme, not `themes: {light, dark}`: dual themes emit CSS variables, and
// this HTML also goes into the feed where no stylesheet follows it
const SHIKI_THEME = accessibleDracula

export const markdownToHtml = async (markdown: string, imageOptions: ImageOptions) =>
	String(
		await unified()
			.use(remarkParse)
			.use(remarkGfm)
			.use(remarkSmartypants)
			.use(remarkRehype)
			.use(rehypeSlug)
			.use(servePostImages, imageOptions)
			.use(rehypeShiki, {theme: SHIKI_THEME})
			.use(rehypeStringify)
			.process(markdown),
	)
