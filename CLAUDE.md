# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a monorepo for **magrippis.com**, Johnny Magrippis' "blogfolio": a personal portfolio and technical blog.

It is a fully prerendered marketing site plus a Markdown blog, built with SvelteKit and deployed to Cloudflare as static assets. There is no auth, no newsletter and no database.

Locally, the dev server is always running at http://localhost:5173/

**Routes are load-bearing.** Several posts have gone viral and are linked from elsewhere, so `/blog/<year>/<slug>` must never change.

## Coding Standards

- **Strongly typed**: Consistently use type aliases for all object type definitions
- You MUST type things accurately. Don't be lazy.
- You must NOT use the `any` type, or similarly lazy ways out.
- **You MUST design for a single source of truth**: DO NOT hardcode strings and arrays when data can be derived.
- **NEVER** try format code or check for whitespace yourself. Use your Write & Edit tools properly. We have a dedicated formatter you may use at the end of your tasks.
- It will **NEVER** be a formatting issue.
- You must **NEVER** over-indulge with comments! If you find yourself writing comments, stop and think whether a better variable or function name would make the code clearer instead.
- You must **NEVER** write comments which only explain the following line of code!

## Architecture

### Monorepo Structure

- `apps/web/` - Main SvelteKit application
- `docs/` - Notes worth keeping, including `sveltekit-3-migration-notes.md`

## Development Commands

All commands should be run from the repository root. The project uses Vite+ (`vp`) as its unified toolchain for dev, build, test, lint, and format. Prefer `vp` commands over `pnpm` scripts.

- `vp run -r dev` - Start development server
- `vp run -r playwright` - Run browser tests
- `vp check` - Format, lint, and type check
- `vp fmt` - Format all code
- `vp lint` - Lint all code

Many of these commands are "bundled" in a `vp run sanity`, which you should run anytime and see succeed fully, before considering a task complete.

It will NEVER be the case where that command failed before we started working on a task. If something fails, YOU broke it.

## Web App (apps/web/)

### Web App Specific Commands

From `apps/web/` directory:

- `vp test` - Run Vitest unit tests
- `vp run playwright` - Run all Playwright tests
- `vp run check` - Type check with svelte-check

### Tech Stack

- **Framework**: SvelteKit 3 with Svelte 5 (Runes)
- **Styling**: Tailwind CSS v4 + `shadcn-svelte` components
- **Content**: plain Markdown via `content-collections`, highlighted at build time by Shiki
- **Testing**: Playwright (e2e/integration), Vitest (unit)
- **Icons**: Unplugin Icons
- **Deployment**: Cloudflare Workers Static Assets

### SvelteKit 3 specifics

We are on the `3.0.0-next` line, ahead of any migration guide. `docs/sveltekit-3-migration-notes.md` records what broke and why; read it before debugging anything structural.

The two that bite most often:

- **There is no `svelte.config.js`.** Its existence throws. All configuration is passed to `sveltekit(...)` in `apps/web/vite.config.ts`.
- **There is no `$lib`.** Use subpath imports declared in `apps/web/package.json`: `#lib/*` for `src/lib/*`, and `#content` for the generated collections.

### Key Directories

- `apps/web/src/lib/components/` - Reusable Svelte components
- `apps/web/src/routes/` - SvelteKit file-based routing
- `apps/web/content/blog/<year>/<slug>.md` - The blogposts, plus their own `content-collections.ts`
- `apps/web/tests/e2e/` - Playwright test suites

### Content pipeline

Posts are plain Markdown — **no MDX, no mdsvex, no components in posts**.

`src/lib/markdown.ts` holds one unified pipeline whose HTML is consumed by **both** the post page and the RSS `content:encoded`. Shiki runs there with a **single theme and inline styles**: dual light/dark themes emit CSS custom properties, which do not survive in a feed reader or an email where no stylesheet travels along.

### Prerendering gotchas

Everything is prerendered, which quietly breaks two things:

- **`page.url` has a fake origin** (`http://sveltekit-prerender`). Anything canonical — `og:url`, share links, sitemap, feed — MUST be built from `SITE_URL` in `src/lib/constants.ts`.
- **Response headers set in `+server.ts` are lost**, because the route becomes a file and the host infers a type from the extension. Set them in `static/_headers` instead.

Relative timestamps have the same problem: render an absolute date server-side and upgrade it on mount, as `RelativeTime.svelte` does.

### Testing Strategy

- **Playwright**: e2e and integration tests, run against a `vp preview` of the built site
- **Vitest**: Unit tests, can run independently

You MUST start Playwright specs / tests by navigating to a page, then:

```ts
await expect(page.getByTestId('hydrated')).toBeVisible()
```

This ensures our app is fully interactive. That signal is deliberate infrastructure: hydration is a framework feature we do not test, but Playwright acts faster than a human and will interact with a page before its listeners are attached. It is the ONLY sanctioned test id. Never add another, and never reach for a test id to test a feature — use accessible locators.

Note `apps/web/tests/` carries its own `tsconfig.json` and `playwright.config.ts`; Playwright resolves tsconfig `extends` through Node and cannot resolve Kit 3's `$app/tsconfig`.

Prefer tests that tell a bigger story: Have the "user" (as Playwright) interact with the application for a realistic flow.

#### Example

Test the happy path in a single test:

- "I expect to see this", then "I type this", then "I click this", then "I expect to see this"
- AVOID individual tests for a single action "I expect to see this"

#### Meaningful tests

Even the Vitest tests have to be meaningful!

**NEVER write tests that only verify types or function existence**. TypeScript already guarantees these at compile time. Tests MUST verify actual behaviour, logic, edge cases, or integration points.

Examples of USELESS tests to NEVER write:

- `expect(typeof someFunction).toBe('function')` - TypeScript already checks this
- `expect(someFunction).toBeDefined()` - TypeScript already checks this
- `expect(someObject).toHaveProperty('field')` - TypeScript already checks this

If you have to write a unit test, it must answer: "What bug would this catch that TypeScript can't?"

EVERY test should have a realistic to see fail.

### Environment Setup

- Use pnpm as package manager
- Node.js 26 required (managed by Mise)

### Tailwind CSS v4 Configuration

- **No tailwind.config file**: Tailwind v4 does not use a traditional config file
- **CSS-based configuration**: All Tailwind configuration is done in CSS files
- **Main config location**: `apps/web/src/app.css` contains the Tailwind configuration
- **Theme customization**: Custom colors, fonts, and utilities are defined in `app.css` using `@theme` blocks
- **Use `cn` utility**: Import from `#lib/utils` for conditional class application with proper merging
- **Prefer Tailwind classes**: Always use Tailwind utility classes instead of inline styles or custom CSS in `<style>` blocks when possible

The palette is one set of HSL tokens. `shadcn-svelte`'s semantic names (`--color-background`, `--color-primary`, …) are **mapped onto** those tokens in `@theme inline` rather than duplicated, so a redesign means changing the mapping, not the components.

### Vanilla HTML forms

Always prefer web standards, including using the `form` element for GET actions like filtering and pagination, and POST actions like updating a record.

**Use SvelteKit Remote Functions `form`** with Zod: the SvelteKit philosophy respects web standards and falls back to native form behaviour even when JavaScript is disabled, and also increase DevEx thanks to strong typing.

Note this site is fully static and currently has no forms; remote functions are not enabled in `vite.config.ts` yet.

### TypeScript Coding Standards

- **Always use `type` over `interface`**: Prefer `type Props = {}` instead of `interface Props {}`
- **Function declarations**: Prefer arrow functions `const someMethod = () => {}` over function declarations `function someMethod() {}`
- No `console.log`s committed in the code! You may use them for debugging purposes, but only use `console.info`, `console.warn`, `console.error` appropriately for code meant to remain in the codebase.
- **Performance measurement**: Always use `performance.now()` instead of `Date.now()` for timing operations. The Performance API provides high-resolution timestamps (microsecond precision) specifically designed for performance measurement, whereas `Date.now()` is lower resolution and intended for timestamps.
- **NEVER explicitly use `undefined`**. If you have to assign a value, use `null` instead. NEVER call a method like `antiPattern(undefined)`. You may use `antiPattern()`
- As an LLM, you have difficulty telling curly apostrophes and straight apostrophes apart. **NEVER** try to change any type of code to another. If you think something is not compiling, you MUST ask the user for clarification.
- If you add a new dependency, you **MUST** `vp update -r --latest` to confirm all dependencies are up to their latest versions.

## Deployment

`adapter-static` plus an **assets-only** `wrangler.jsonc` — note it deliberately has **no `main`**. Every page is prerendered, so there is no Worker, which sidesteps [kit#15960](https://github.com/sveltejs/kit/issues/15960) entirely.

Consequences to remember:

- Requests never reach a Worker, so **Smart Placement and Argo cannot speed this site up**. Don't buy them.
- Redirects live in `static/_redirects`, headers in `static/_headers`.
- Leave `trailingSlash` alone: Cloudflare's default already matches SvelteKit's flat `route.html` output.

## QA

0. NEVER try to run the server yourself, NEVER check whether we are in a git repo. You MUST assume we are running the dev server on a different window, and http://localhost:5173 is reachable, interactive and serving our app. You MUST assume we are already in a git monorepo.
1. At the end of a task where you changed or added code, you MUST ensure `vp run sanity` runs successfully at the root of the project.
2. At the end of a task where you changed or added code, you MUST ensure any related spec or test files are updated. This includes Playwright `.spec.ts` files and Vitest `.test.ts` files.

# Svelte MCP server

You are able to use the Svelte MCP server, where you have access to comprehensive Svelte 5 and SvelteKit documentation. Here's how to use the available tools effectively:

## Available MCP Tools:

### 1. list-sections

Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

### 2. get-documentation

Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the list-sections tool, you MUST analyze the returned documentation sections (especially the use_cases field) and then use the get-documentation tool to fetch ALL documentation sections that are relevant for the user's task.

### 3. svelte-autofixer

Analyzes Svelte code and returns issues and suggestions.
You MUST use this tool whenever writing Svelte code before sending it to the user.
You MUST keep calling it until no issues or suggestions are returned UNLESS they are about experimental features.

### 4. playground-link

Generates a Svelte Playground link with the provided code.
After completing the code, ask the user if they want a playground link. Only call this tool after user confirmation and NEVER if code was written to files in their project.

## Project-specific notes

### Creating new routes and page metadata

If you've created a new route, make sure you have added a corresponding `+page.server.ts`.

Every route needs one with, at the very least, an exported `load` method returning an object with a `meta` key. For example, at minimum we should have a `+page.server.ts` like this:

```ts
import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async () => ({
	meta: {
		title: '[THE ROUTE TITLE]',
		description: '[A LONG ACCURATE DESCRIPTION FOR SEO BEST PRACTICES]',
	},
})
```

`meta` also takes an optional `image`, a path under `static/og`. Open-graph cards are rendered to real PNGs at build time by `scripts/ogImagesPlugin.ts`, since a static deploy has no server to generate them per request.

# Cloudflare Documentation MCP server

Get up to date reference information on Cloudflare.

Use this when researching ways to accomplish a task with automation or infrastructure.

Also use this when debugging an issue that seems to work locally, but not when deployed to Cloudflare.

## Available Cloudflare Documentation MCP Tools:

### 1. search_cloudflare_documentation

**Description:** Search the Cloudflare documentation.

### Playwright MCP Server

At the end of writing user-facing code, you MUST use the Playwright MCP Server to confirm the UX is as expected. You MUST keep using it until all issues are resolved.

You MUST Playwright's accessibility tree to navigate the DOM. **NEVER** take screenshots.

When writing Playwright tests / specs, you MUST use the Playwright MCP server to confirm we are using the correct Locators / selectors.

You MUST use accessible Locators. NEVER use test ids: no new `data-testid` in the source code, no `getByTestId` in the tests, with the single sanctioned exception of the `hydrated` signal described above.

AVOID writing source code just for tests.

When writing tests NEVER `waitForTimeout`. Playwright assertions have built-in waits, there must always be a better way than an explicitly waiting.

When evaluating page performance, you MUST consider the Core Web Vitals. Layout Shift is unacceptable. Prevent it with common techniques like specifying width and height on images.
