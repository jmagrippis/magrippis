import type {Plugin} from 'vite'

/*
	vite-plugin-svelte loads the inspector by appending an import to Vite's client
	module, filtering on `vite/dist/**\/client.mjs`. Under pnpm the id resolves
	through the realpath to `@voidzero-dev/vite-plus-core`, so that filter never
	matches and Alt-X does nothing. Drop this once the plugin matches Vite+ paths.
*/
export const svelteInspectorFix = (): Plugin => ({
	name: 'magrippis-svelte-inspector-fix',
	apply: 'serve',
	transform: {
		filter: {id: /vite-plus-core\/dist\/vite\/client\/client\.mjs(?:\?|$)/},
		handler: (code) => `${code}\nimport('virtual:svelte-inspector-path:load-inspector.js')`,
	},
})
