# Johnny Magrippis Personal Site

![CI](https://github.com/jmagrippis/magrippis/actions/workflows/ci.yaml/badge.svg)

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

- `vp run sanity`: format, lint and type checks, unit tests and browser tests
- `vp test`: Vitest unit tests, from `apps/web`
- `vp run playwright`: Playwright against a preview of the built site, from `apps/web`

## Questions & Contributions

The web is vast and technologies change all the time! This project once was a frontend in Angular talking to a RESTful API written in php. Then a Apollo React frontend talking to a GraphQL backend! Then Next.js on Vercel and now, finally, SvelteKit on Cloudflare. It's all in the version history 😁

Feel free to ask why a feature is implemented in a particular way, or push "Best Practices" and request neat features!
