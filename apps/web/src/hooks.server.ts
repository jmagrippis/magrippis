import type {Handle} from '@sveltejs/kit/hooks'

// no page's text needs the other subsets, which browsers fetch only on demand
const LATIN_FONT_FILE = '/trispace-latin-wght-normal.woff2'

export const handle: Handle = ({event, resolve}) =>
	resolve(event, {
		// Chromium holds first paint up to 100 ms after the stylesheets for a preloaded font, so text renders in Trispace rather than reflowing from the fallback
		preload: (input) =>
			input.type === 'font'
				? input.filename.endsWith(LATIN_FONT_FILE)
				: input.type === 'js' || input.type === 'css',
	})
