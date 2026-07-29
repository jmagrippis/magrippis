# SvelteKit 3 (`3.0.0-next.12`) — what actually broke

Written while replatforming magrippis.com off Next.js, 2026-07-28. There is no
migration guide ([kit#16173](https://github.com/sveltejs/kit/issues/16173)) and
no `sv migrate sveltekit-3` codemod, so this is the changelog we served
ourselves. Toolchain: pnpm workspace, vite-plus 0.2.6, Node 26.4.0.

## 1. `svelte.config.js` is gone

Its mere existence throws:

> svelte.config.js is no longer used. Please pass configuration via the
> `sveltekit(...)` plugin in your Vite config.

`sveltekit()` is now **async** and takes a **flattened** config —
`KitConfig & Omit<Options, 'onwarn'> & Pick<SvelteConfig, 'vitePlugin'>`. What
used to be nested under `kit: {}` is now top level, and vite-plugin-svelte
options (`preprocess`, `compilerOptions`) sit alongside it:

```ts
sveltekit({
	adapter: adapter(),
	preprocess: vitePreprocess(),
	compilerOptions: {runes: true},
	vitePlugin: {inspector: true},
})
```

Returning a promise into the Vite `plugins` array is fine — Vite awaits it.

## 2. `tsconfig.json` extends `$app/tsconfig`, not `./.svelte-kit/tsconfig.json`

`.svelte-kit/tsconfig.json` is no longer generated. Kit now writes
`node_modules/$app/tsconfig/tsconfig.json` and expects:

```json
{"extends": "$app/tsconfig", "include": ["src"]}
```

The check is a **literal string comparison** (`extends_id` in
`src/core/sync/write_tsconfig/utils.js`), so pointing at the same file by
relative path still warns _and_ makes Kit skip `validate_resolved_config` — you
silently lose its guard against clobbering essential compiler options. Use the
bare specifier.

**This is the single biggest source of friction on Kit 3.** `$app/tsconfig` is
resolvable by TypeScript but not by Node, and every tool that reads a tsconfig
through Node chokes on it. Three hit us:

| Tool                | Symptom                              | Fix                                        |
| ------------------- | ------------------------------------ | ------------------------------------------ |
| content-collections | `Cannot find module '$app/tsconfig'` | config + standalone tsconfig in `content/` |
| shadcn-svelte CLI   | `Invalid import alias found`         | none — components copied in by hand        |
| Playwright          | `Failed to resolve "extends" path`   | config + standalone tsconfig in `tests/`   |

The pattern that works: move the tool's entry point into its own directory with
a `tsconfig.json` that extends nothing, so its upward lookup stops before
reaching the app config.

## 3. Kit imports `rolldown` as a bare package

`src/exports/vite/index.js` does `import {exactRegex, prefixRegex} from
'rolldown/filter'`. Under real Vite 8 that resolves via Vite's own dependency.
Under vite-plus, `vite` is aliased to `@voidzero-dev/vite-plus-core`, which
exposes rolldown only at the `vite/rolldown` subpath — so the bare specifier
fails at config load:

> Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'rolldown'

Fix: add `rolldown` as a direct devDependency. Safe here because
`rolldown/filter` exports stateless regex builders — no bundler instance or
plugin identity crosses the boundary, so the duplicate copy cannot desync.

## 4. `$lib` is gone

The biggest one, and easy to miss because it fails at typecheck rather than at
build. Kit 3 no longer writes a `$lib` entry into the generated tsconfig
`paths` — the only entries there are the ones it derives from your package.json
`imports` field. `import {cn} from '$lib/utils'` gives:

> Cannot find module '$lib/utils' or its corresponding type declarations.

Replace with a subpath import in `package.json`:

```json
"imports": {"#lib/*": "./src/lib/*"}
```

and `import {cn} from '#lib/utils'`.

Knock-on: **the shadcn-svelte CLI (v1.4.2) cannot install into a Kit 3 app.** It
validates every alias in `components.json` against tsconfig paths and rejects
both the `$lib` default and `#lib/...`:

> Config Error: Invalid import alias found: ("lib": "$lib") in components.json.

Workaround used here: copy the components in by hand and rewrite `$lib/utils` →
`#lib/utils`. Worth re-checking when shadcn-svelte catches up to Kit 3.

## 5. `config.alias` is deprecated — use subpath imports

> The `config.alias` option is deprecated, and will be removed in a future
> version of SvelteKit. Use subpath imports instead.

In `package.json`:

```json
"imports": {"#content": "./content/.content-collections/generated/index.js"}
```

Kit reads the `imports` field and writes the matching tsconfig paths itself.

## content-collections on Kit 3 — verified working

The decision doc flagged this as untested (its sample is pinned to Kit 2 /
Vite 7 / zod 3). It works on Kit 3 / Vite 8 / **zod 4**, with one wrinkle.

**The wrinkle:** content-collections reads the nearest `tsconfig.json` through
`load-tsconfig` purely to extract `compilerOptions.paths`, and resolves
`extends` through **Node**, which cannot resolve `$app/tsconfig`:

> ConfigurationError: configuration file content-collections.ts is invalid:
> Error: Cannot find module '$app/tsconfig'

**Fix:** move the config to `content/content-collections.ts` (via the plugin's
`configPath` option) and give `content/` a standalone `tsconfig.json` that
extends nothing. `load-tsconfig` walks up from the config file's directory and
stops there, so the app tsconfig stays canonical. A collection's `directory` is
resolved relative to the config file, hence `directory: 'blog'`.

Also: `defineConfig({collections: [...]})` is deprecated in favour of
`content: [...]`.

## Not Kit 3, but bit us anyway: prerendering

Two things quietly stop working once every route is prerendered. Neither shows
up in dev, which is what makes them dangerous.

**`page.url` has a fake origin.** During prerender it is
`http://sveltekit-prerender`, so `<meta property="og:url" content={page.url.href}>`
ships as `http://sveltekit-prerender/about` and every social share is broken.
Anything canonical must be built from a `SITE_URL` constant instead. Same for
the sitemap, the feed and share links.

**Response headers set in `+server.ts` are lost.** The route becomes a file, and
the host serves whatever it infers from the extension — so an RSS route setting
`application/rss+xml` is actually served as `text/xml`. Set it in
`static/_headers`, which Cloudflare Static Assets applies.

## Still true from the original decision doc

`adapter-static` with an assets-only `wrangler.jsonc` (no `main`) remains the
right call. We are no longer doing it for the zero-JS reason — that was dropped
when we chose hydration — but because it emits no `_worker.js` at all, which
categorically eliminates
[kit#15960](https://github.com/sveltejs/kit/issues/15960) (Rolldown emits
`createRequire`, `undefined` in workerd, fails at deploy rather than build).
Verified: the build output contains no `_worker.js`.
