// A post's animations are committed as animated WebP and served as they are, because enhanced-img keeps only an animation's first frame
import sharp from 'sharp'

import {cycleMs, loopsWithinLimit, MAX_PLAYING_MS} from '#lib/animationLimit.js'

const [source, destination, width] = process.argv.slice(2)

if (!source || !destination?.endsWith('.webp')) {
	throw new Error(
		'Usage, from apps/web: node scripts/gifToWebp.ts <source.gif> content/blog/<year>/<slug>/<name>.webp [width]',
	)
}

const animation = sharp(source, {animated: true})
const {delay = []} = await animation.metadata()
const loop = loopsWithinLimit(delay)
if (loop < 1) {
	throw new Error(
		`One pass of ${source} lasts ${cycleMs(delay)} ms, over the ${MAX_PLAYING_MS} ms an animation may play: shorten it first`,
	)
}

if (width) animation.resize({width: Number(width)})
await animation.webp({quality: 80, loop}).toFile(destination)
