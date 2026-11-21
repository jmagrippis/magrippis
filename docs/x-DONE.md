# Done

Finished work, oldest first.

An entry is the step number, its title and the date. Nothing else, unless the work taught something a reader could not get from the code: a constraint discovered, a wrong turn worth not repeating, a figure that was measured. Never restate what shipped.

## 1.1 Agents work this repo as they work box-paradox (2026-11-14)

## 1.2 The stable SvelteKit 3 toolchain (2026-11-14)

## 1.3 At least as fast as the live site (2026-11-15)

Lighthouse 13.6.0, mobile, median of 5 runs, LCP in ms. Live is the Next.js site on Vercel. Local is `vp run preview`, which serves HTTP/1.1, and h2 is the same build behind a local HTTP/2 proxy, closer to how Cloudflare serves it. CLS was 0 on every local run.

| Page    | Live | Local | h2   |
| ------- | ---- | ----- | ---- |
| `/`     | 2421 | 2425  | 2114 |
| `/blog` | 2874 | 2499  | 2267 |
| A post  | 3623 | 2567  | 2140 |

## 1.4 magrippis.com is served by Cloudflare (2026-11-21)

Lighthouse 13.6.0, mobile, median of 5 runs on the same day, LCP in ms. CLS was 0 on Cloudflare throughout, and 0.022 on Vercel's home page.

| Page    | Vercel | Cloudflare |
| ------- | ------ | ---------- |
| `/`     | 2282   | 2137       |
| `/blog` | 2875   | 2282       |
| A post  | 4041   | 2283       |
