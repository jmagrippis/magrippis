# Johnny Magrippis Personal Site

![QA](https://github.com/jmagrippis/magrippis/actions/workflows/qa-web.yaml/badge.svg)
![E2E](https://github.com/jmagrippis/magrippis/actions/workflows/e2e.yaml/badge.svg)

The personal website of software engineer Johnny Magrippis. Yours truly!

I often livestream development over on [my youtube channel](https://www.youtube.com/@johnnifytech?sub_confirmation=1).

## Live Site

You may view the result of all this code at
[magrippis.com](https://magrippis.com)!

## Notable tech used

- Meta framework: [SvelteKit](https://svelte.dev/docs/kit) v3 with [Svelte 5](https://svelte.dev/)
- Styling: [Tailwind](https://tailwindcss.com/) v4 + [shadcn-svelte](https://shadcn-svelte.com/)
- Content: plain Markdown via [content-collections](https://content-collections.dev/), highlighted at build time by [Shiki](https://shiki.style/)
- Deployment: [Cloudflare](https://developers.cloudflare.com/workers/static-assets/) static assets
- Toolchain: [Vite+](https://vite.dev/) (`vp`) with [pnpm](https://pnpm.io/) workspaces
- Browser tests: [Playwright](https://playwright.dev/)

## Getting started

```bash
pnpm install
vp run -r dev
```

Then:

- `vp run sanity`: format, lint and type checks, unit tests, a build, and browser tests
- `vp test`: Vitest unit tests, from `apps/web`
- `vp run preview`: the last build, served by `wrangler dev` as Cloudflare serves it, from `apps/web`
- `vp run playwright`: Playwright against the last build, served by `wrangler dev` on port 4173, from `apps/web`

## Repo layout

```
apps/web/
├── content/blog/<year>/<slug>.md   the blogposts
├── content/blog/<year>/<slug>/     each blogpost's images
├── scripts/                        build-time open-graph card rendering, GIF to WebP conversion
├── src/
└── tests/e2e/                      Playwright specs
docs/                               design, roadmap and stack research
```

## Post images

A post's images sit next to it, in `apps/web/content/blog/<year>/<slug>/`, and its Markdown links each by relative path, as in `![alt](./<slug>/<name>.png)`. Stills are JPEG or PNG, which enhanced-img serves in AVIF and WebP at each width. Animations are WebP and served as committed, so convert a GIF first, from `apps/web`, giving the width the post shows it at:

```bash
node scripts/gifToWebp.ts <source.gif> content/blog/<year>/<slug>/<name>.webp [width]
```

## Questions & Contributions

The web is vast and technologies change all the time! This project once was a frontend in Angular talking to a RESTful API written in php. Then a Apollo React frontend talking to a GraphQL backend! Then Next.js on Vercel and now, finally, SvelteKit on Cloudflare. It's all in the version history 😁

Feel free to ask why a feature is implemented in a particular way, or push "Best Practices" and request neat features!
