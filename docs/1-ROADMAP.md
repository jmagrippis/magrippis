# Roadmap

Conventions: two milestones at a time, three at most. Milestones keep their number forever and steps are `N.M`. A finished step moves to `x-DONE.md` under its own number, so this is a rolling window: as it empties, promote from `2-FUTURE.md`. Steps say what changes and how it is checked, never how it is built. No estimates. Every step ends with something visible on screen.

## M1: magrippis.com on SvelteKit 3 and Cloudflare

The live site is still the Next.js app on Vercel. M1 ends when magrippis.com is served by Cloudflare from this repo, at least as fast.

- 1.4 magrippis.com is served by Cloudflare. Check: the live site answers from Cloudflare, `www` and `/tube` redirect, a push to main deploys and the end-to-end suite passes against production, page views reach Cloudflare Web Analytics, and mail to the domain still arrives.
