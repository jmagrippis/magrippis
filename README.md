# Johnny Magrippis Personal Site

![QA](https://github.com/jmagrippis/magrippis/actions/workflows/qa-web.yaml/badge.svg)
![E2E](https://github.com/jmagrippis/magrippis/actions/workflows/e2e.yaml/badge.svg)

The personal website of software engineer Johnny Magrippis. Yours truly!

I often livestream development over on [my youtube channel](https://www.youtube.com/@johnnifytech?sub_confirmation=1).

## Live Site

You may view the result of all this code at
[magrippis.com](https://magrippis.com)!

## Notable tech used

- Meta framework: [SvelteKit](https://svelte.dev/docs/kit) with [Svelte 5](https://svelte.dev/)
- Styling: [Tailwind](https://tailwindcss.com/) v4 + [shadcn-svelte](https://shadcn-svelte.com/)
- Content: plain Markdown via [content-collections](https://content-collections.dev/), highlighted at build time by [Shiki](https://shiki.style/)
- Deployment: [Cloudflare](https://developers.cloudflare.com/workers/static-assets/) static assets
- Toolchain: [Vite+](https://vite.dev/) (`vp`) with [pnpm](https://pnpm.io/) workspaces
- Browser tests: [Playwright](https://playwright.dev/)

Every page is prerendered, so there is no server to wait on — and no Worker either: the `wrangler.jsonc` has no `main` on purpose.

## Getting started

```bash
pnpm install
vp run -r dev
```

Then:

- `vp run sanity` — format, lint, type check and browser tests
- `vp test` — Vitest unit tests, from `apps/web`
- `vp run playwright` — Playwright against a preview of the built site, from `apps/web`

## Repo layout

```
apps/web/
├── content/blog/<year>/<slug>.md   the blogposts
├── scripts/                        build-time open-graph card rendering
├── src/
└── tests/e2e/                      Playwright specs
docs/                               notes worth keeping
```

## Questions & Contributions

The web is vast and technologies change all the time! This project once was a frontend in Angular talking to a RESTful API written in php. Then a Apollo React frontend talking to a GraphQL backend! Then Next.js on Vercel for a good few years. It's all in the version history 😁

Feel free to ask why a feature is implemented in a particular way, or push "Best Practices" and request neat features!

## License

For learning purposes, this repo is licensed under the MIT license.
