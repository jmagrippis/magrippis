import {defineConfig} from 'vite-plus'

export default defineConfig({
	lint: {
		options: {typeAware: true, typeCheck: true},
		rules: {'typescript/no-unused-vars': 'warn'},
		ignorePatterns: ['**/components/ui/*/index.ts'],
	},
	staged: {
		'*.{js,ts,svelte}': 'vp check --fix',
	},
	run: {
		tasks: {
			sanity: {
				// the build generates what type checks import: `$app/tsconfig` and the `#content` collections
				command:
					'vp run -r build && vp check && vp run -r check && vp run -r test && vp run -r playwright',
			},
		},
	},
	fmt: {
		svelte: true,
		useTabs: true,
		singleQuote: true,
		semi: false,
		bracketSpacing: false,
		sortTailwindcss: {},
		sortImports: {},
		ignorePatterns: [
			'package-lock.json',
			'pnpm-lock.yaml',
			'yarn.lock',
			'dist/',
			'build/',
			'.svelte-kit/',
			'.content-collections/',
			'test-results/',
			// Claude Code owns this and rewrites it in its own style
			'.claude/settings.local.json',
		],
		overrides: [
			{
				// a post's code samples are what readers see, so they stay as written
				files: ['apps/web/content/blog/**'],
				options: {embeddedLanguageFormatting: 'off'},
			},
		],
	},
})
