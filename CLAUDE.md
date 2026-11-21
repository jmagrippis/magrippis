# CLAUDE.md

## Workflow

- Intent is in `docs/0-DESIGN.md`, the plan in `docs/1-ROADMAP.md`, and the stack's decisions and constraints in `docs/research-stack.md`: read that before debugging anything structural.
- `docs/research-stack.md` holds what was true at the versions it names, not rules. When an entry stops holding, or a clearly better approach turns up, change the code and the entry, and report it. Propose first anything that would change `docs/0-DESIGN.md` or an invariant below.
- Use `vp` (Vite+), not `pnpm` scripts.
- A task that changed code is done when related specs and tests are updated and `vp run sanity` passes from the repo root. It always passes before you start, so a failure is yours.
- A PostToolUse hook runs `vp lint --fix` and `vp fmt` on every file you edit. Never format by hand or chase whitespace: it is never a formatting issue.
- After adding a dependency, run `vp update -r --latest`, to ensure we keep **all** dependencies up to date.

## Code

- Type everything accurately: no `any` or similar escape hatches. `type`, never `interface`.
- Single source of truth: derive strings and arrays instead of hardcoding them.
- Arrow functions over function declarations.
- `null`, never an explicit `undefined`: `undefined` should mean we literally have not assigned a value.
- No `console.log` in committed code: you may use `console.info`, `console.warn` or `console.error`, if appropriate.
- Time with `performance.now()`, not `Date.now()`.
- Never swap a quote or apostrophe between curly and straight. If one seems to break compilation, ask.
- Comments only for a non-obvious why, never to restate the next line. Prefer a better name.
- Tailwind classes over inline styles and `<style>` blocks. Merge conditional classes with `cn` from `#lib/utils`.
- Tailwind v4 is configured in `apps/web/src/app.css` alone. The palette is one set of HSL tokens: shadcn-svelte's semantic colours map onto them in `@theme inline`, never duplicate them.
- Native `<form>`s for GET (filtering, pagination) and POST (mutations), via SvelteKit Remote Functions `form` with Zod.
- Every page route has a `+page.server.ts` whose `load` returns `meta` with a `title` and a long, accurate SEO `description`. The optional `image` is a path under `/og/`, to a card `apps/web/scripts/ogImagesPlugin.ts` renders at build time.
- Relative times render as an absolute date and upgrade on mount, as `RelativeTime.svelte` does: prerendered HTML can't know the reader's now.
- No layout shift: Use best practices, including but not limited to giving images a width and height.
- Strive for excellent Core Web Vitals and accessibility: for UX, not to game Lighthouse scores or similar

## Invariants

- A post's address, `/blog/<year>/<slug>`, never changes: posts have gone viral and are linked from elsewhere.
- Anything canonical (`og:url`, share links, sitemap, feed) is built from `SITE_URL`, because prerendering gives `page.url` a fake origin.
- Posts are plain Markdown with no components: no MDX, no mdsvex. Their HTML is self-contained, one Shiki theme with inline styles, because the feed carries the same HTML.
- Response headers go in `apps/web/static/_headers` and path redirects in `apps/web/static/_redirects`, because prerendered `+server.ts` routes lose their headers. Host redirects, such as `www`, are a Cloudflare Redirect Rule.
- Leave `trailingSlash` alone: Cloudflare's default already matches Kit's flat `route.html` output.
- No `svelte.config.js`: configure Kit through `sveltekit(...)` in `apps/web/vite.config.ts`. No `$lib`: import through the `#lib/*` and `#content` subpath imports.
- A `#lib` import names its file with an extension, `.js` for TypeScript modules, as the shadcn-svelte CLI writes it: `#lib/utils.js`, `#lib/components/ui/button/index.js`, `#lib/components/NotFound.svelte`.

## Tests

Every Playwright spec that drives a page navigates to it, then waits for hydration, because Playwright otherwise acts before listeners attach:

```ts
await expect(page.getByTestId('hydrated')).toBeVisible()
```

- That is the only sanctioned test id. Never add a `data-testid` or call `getByTestId` for anything else: use accessible locators, confirmed with the Playwright MCP.
- One test per realistic user story (see this, type, click, see that), not one test per assertion.
- Never `waitForTimeout`: rely on assertion auto-waiting.
- Playwright tests the last `vp build`, served by `wrangler dev` on port 4173. `vp run sanity` builds first.
- Request-level Playwright specs, `*.request.spec.ts`, exist only for how the server answers: status, headers, redirects. Anything our code generates is tested in Vitest.
- Every test, Vitest included, must catch a bug TypeScript can't and have a realistic way to fail. No `typeof`, `toBeDefined` or `toHaveProperty` checks.
- Don't write source code just for tests.

## MCP servers

- Svelte: `list-sections`, then `get-documentation` for every relevant section. Run `svelte-autofixer` on all Svelte code you write until it reports nothing beyond experimental features. Never offer `playground-link`: code here is written to files.
- Playwright: after user-facing changes, verify the UX through the accessibility tree until it is right. Never take screenshots.
- Cloudflare docs: for infrastructure research, and for bugs that only appear when deployed.
