import {defineConfig, devices, type Project} from '@playwright/test'

const PREVIEW_URL = new URL('http://localhost:4173')

// they use no browser, so every browser project would repeat the same requests
const REQUEST_SPECS = /.*\.request\.spec\.ts/

const projects: Project[] = [
	{
		name: 'chromium',
		use: {...devices['Desktop Chrome']},
		testIgnore: [/.*mobile.spec.ts/, REQUEST_SPECS],
	},
	{
		name: 'firefox',
		use: {...devices['Desktop Firefox']},
		testIgnore: [/.*mobile.spec.ts/, REQUEST_SPECS],
	},
	{
		name: 'Mobile Safari',
		use: {
			...devices['iPhone 15 Pro'],
			contextOptions: {reducedMotion: 'reduce'},
		},
		testIgnore: [/.*desktop.spec.ts/, REQUEST_SPECS],
	},
	{
		name: 'requests',
		testMatch: REQUEST_SPECS,
	},
]

export default defineConfig({
	testDir: './e2e',
	// more headroom than a plain BDD run needs: axe on the longest posts is slow
	timeout: process.env.CI ? 60_000 : 30_000,
	fullyParallel: !process.env.CI,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 4 : 1,
	workers: process.env.CI ? 3 : undefined,
	use: {
		/* Point it to a deployment, to run tests against it! */
		baseURL: process.env.PUBLIC_ROOT_URL || PREVIEW_URL.origin,

		launchOptions: {
			slowMo: parseInt(process.env.SLOW_MO || '0'),
		},

		trace: 'on-first-retry',
		video: process.env.VIDEO ? 'on' : 'retain-on-failure',
	},

	projects,

	webServer: !process.env.PUBLIC_ROOT_URL
		? {
				// `wrangler dev` applies `_headers`, `_redirects` and the 404 page as Cloudflare does
				command: `vp run preview --port ${PREVIEW_URL.port}`,
				// cwd resolves from this config, in `tests/`
				cwd: '..',
				url: PREVIEW_URL.origin,
			}
		: undefined,
})
