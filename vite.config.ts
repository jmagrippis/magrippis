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
				command: 'vp check && vp run -r check && vp run -r test && vp run -r playwright',
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
		],
	},
})
