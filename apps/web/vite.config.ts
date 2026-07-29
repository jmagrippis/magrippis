import contentCollections from '@content-collections/vite'
import adapter from '@sveltejs/adapter-static'
import {enhancedImages} from '@sveltejs/enhanced-img'
import {sveltekit} from '@sveltejs/kit/vite'
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import {FileSystemIconLoader} from 'unplugin-icons/loaders'
import Icons from 'unplugin-icons/vite'
import {defineConfig, lazyPlugins} from 'vite-plus'

import {ogImages} from './scripts/ogImagesPlugin'
import {svelteInspectorFix} from './scripts/svelteInspectorFix'

export default defineConfig({
	run: {
		tasks: {
			playwright: {
				command: 'playwright test --config tests/playwright.config.ts',
				input: [{auto: true}, '!test-results/**', '!.svelte-kit/**', '!build/**'],
				env: ['PUBLIC_ROOT_URL', 'CI'],
			},
		},
	},
	plugins: lazyPlugins(() => [
		tailwindcss(),
		ogImages(),
		contentCollections({configPath: 'content/content-collections.ts'}),
		enhancedImages(),
		sveltekit({
			adapter: adapter(),
			preprocess: vitePreprocess(),
			compilerOptions: {runes: true},
			vitePlugin: {inspector: true},
		}),
		svelteInspectorFix(),
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
	preview: {
		port: 5173,
	},
})
