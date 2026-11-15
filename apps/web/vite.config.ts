import contentCollections from '@content-collections/vite'
import adapter from '@sveltejs/adapter-static'
import {enhancedImages} from '@sveltejs/enhanced-img'
import {sveltekit} from '@sveltejs/kit/vite'
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import {FontaineTransform, resolveCategoryFallbacks} from 'fontaine'
import {FileSystemIconLoader} from 'unplugin-icons/loaders'
import Icons from 'unplugin-icons/vite'
import {defineConfig, lazyPlugins} from 'vite-plus'

import {ogImages} from './scripts/ogImagesPlugin'

export default defineConfig({
	run: {
		tasks: {
			playwright: {
				command: 'playwright test --config tests/playwright.config.ts',
				// a run against a deployment depends on that site, not on any local file, so a cache hit would replay a stale result
				cache: false,
			},
		},
	},
	plugins: lazyPlugins(() => [
		FontaineTransform.vite({
			// Trispace's glyphs come in three widths: a monospace face scaled to their average keeps each line's width, where Arial rewraps centered text.
			// Stock Android has none of fontaine's monospace faces, but Chrome there matches its Cutive Mono by name
			fallbacks: {
				'Trispace Variable': [
					...resolveCategoryFallbacks({
						fontFamily: 'Trispace Variable',
						fallbacks: {},
						metrics: {category: 'monospace'},
					}),
					'Cutive Mono',
				],
			},
		}),
		tailwindcss(),
		ogImages(),
		contentCollections({configPath: 'content/content-collections.ts'}),
		enhancedImages(),
		sveltekit({
			adapter: adapter(),
			// Cloudflare serves `404.html` at any depth, where relative `./_app/` paths would miss
			paths: {relative: false},
			preprocess: vitePreprocess(),
			compilerOptions: {runes: true},
			inspector: true,
		}),
		Icons({
			compiler: 'svelte',
			customCollections: {
				// brand SVGs hardcode black, which would ignore every colour utility
				brand: FileSystemIconLoader('./src/icons', (svg) =>
					svg.replace(/(fill|stroke)="(black|#000|#000000)"/gi, '$1="currentColor"'),
				),
			},
		}),
	]),
	test: {
		include: ['src/**/*.test.ts'],
		mockReset: true,
	},
})
