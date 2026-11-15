# magrippis.com

Johnny Magrippis’ blogfolio: his portfolio and technical blog.

This doc states intent, with no type names, file paths or endpoints.

## Purpose

Get people watching Johnny’s YouTube videos and reaching out for collaborations or mentoring.

## Pages

- Home: an intro with a typed-out headline cycling through his titles, his mission, YouTube videos, testimonials, ways to support him, and other work.
- About: why the site exists, its stack, and how to reach him.
- Blog: all posts, newest first, each with its cover, snippet, tags and age.
- Post: title, age, cover, body, share buttons, and a link back to the blog.
- Not found: a real page with links onward, readable before JavaScript runs.

## Addresses

Posts live at their year and slug. Several are linked from elsewhere, so those addresses never change. The bare domain is canonical and `www` redirects to it. `/tube` redirects to the YouTube channel.

## Posts

Plain Markdown, no components. Code is highlighted at build time. The feed carries each post in full, so that HTML must render with no stylesheet, as in a feed reader or an email. Each post has a social card with its title; other pages use the site’s card.

## Look

Dark by default, with a light theme toggle that persists. Purple accents, Trispace font.

## Performance

Every page is prerendered and served as static files from Cloudflare. Core Web Vitals at least match the Next.js site it replaces, with no layout shift.

## Analytics

Cloudflare Web Analytics, injected at the edge, so the site ships no analytics script.
