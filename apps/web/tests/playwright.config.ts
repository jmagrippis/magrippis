import {defineConfig, devices, type Project} from '@playwright/test'

const projects: Project[] = [
	{
		name: 'chromium',
		use: {...devices['Desktop Chrome']},
		testIgnore: /.*mobile.spec.ts/,
	},
	{
		name: 'firefox',
		use: {...devices['Desktop Firefox']},
		testIgnore: /.*mobile.spec.ts/,
	},
	{
		name: 'Mobile Safari',
		use: {
			...devices['iPhone 15 Pro'],
			contextOptions: {reducedMotion: 'reduce'},
		},
		testIgnore: /.*desktop.spec.ts/,
	},
]

export default defineConfig({
	testDir: './e2e',
	// more headroom than a plain BDD run needs: against `vp dev` the first hit on
	// a route pays for compiling it, and axe on the longest posts is slow
	timeout: process.env.CI ? 60_000 : 30_000,
	fullyParallel: !process.env.CI,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 4 : 1,
	workers: process.env.CI ? 3 : undefined,
	use: {
		/* Point it to a deployment, to run tests against it! */
		baseURL: process.env.PUBLIC_ROOT_URL || 'http://localhost:5173',

		launchOptions: {
			slowMo: parseInt(process.env.SLOW_MO || '0'),
		},

		trace: 'on-first-retry',
		video: process.env.VIDEO ? 'on' : 'retain-on-failure',
	},

	projects,

	webServer: !process.env.PUBLIC_ROOT_URL
		? {
				command: 'vp preview',
				// this config lives in `tests/`, and Playwright resolves cwd relative
				// to it — without this, `vp preview` runs where there is no app
				cwd: '..',
				port: 5173,
				reuseExistingServer: true,
			}
		: undefined,
})
