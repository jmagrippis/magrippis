---
title: Human-readable timestamps with Luxon
snippet: How to display something was posted “4 days ago”, now that Moment.js has become a legacy project to be avoided
publishedAt: 2020-10-25T16:51:54.848Z
tags:
  - Typescript
  - Frontend
---

## The problem

You are building a feed and you want to display when its items were created. You want to present that in the format of “x time ago”. “7 minutes ago” is both friendlier and handier when it comes to feeds, over something like “20th of October” or “Oct 20th”.

However, the solution you may have used before and still dominates all search results is now a **code smell**: Moment.js is in maintenance mode and strongly advised **against** by various sources, [including itself](https://momentjs.com/docs/#/-project-status/ 'Project Status: Not quite dead but should be')!

I’ve been experimenting with alternative third-party libraries, after promptly deciding Javascript’s `Date` is still too unpleasant for me to use out-of-the-box, with too many gotchas to worry about.

So I’ve been favouring [Luxon](https://moment.github.io/luxon/index.html 'A powerful, modern, and friendly wrapper for Javascript dates and times'), the alternative by a core Moment.js contributor, and I was googling my way to doing human-readable relative time with Luxon… and couldn’t find a decent result to save my life.

Even in their own their extensive docs, nothing relevant was matching “human” or even “ago”; turns out the magic word is actually “relative” and I decided to write the article that would have saved me some... _absolute time_. If you’re reading this, hopefully it’s saved you some 🙌🏽

![nothing like saving time](./human-readable-timestamps-with-Luxon/nothing-like-saving-time.webp)

## The solution with Luxon

There are two common ways to store date & time information in Javascript / Typescript.

One is in [Unix or Epoch time](https://en.wikipedia.org/wiki/Unix_time 'the time since 00:00:00 UTC on 1 January 1970') but in milliseconds. In which case your feed items would have a property like `{ createdAt: 1587546142000 }`.

Let’s write a method that would take that timestamp and use Luxon to return that time relative to now:

```ts
import {DateTime} from 'luxon'

export const timestampToRelativeTime = (timestamp: number) =>
	DateTime.fromMillis(timestamp).toRelative()
```

The other common way to store date & time is as an [ISO string](https://en.wikipedia.org/wiki/ISO_8601 '(new Date()).toISOString()'), where your feed items would have a property like `{ createdAt: '2020-04-22T09:02:22.000Z' }`.

Our method for taking a string like that and turning it into a human-readable “x time ago” is extremely similar:

```ts
import {DateTime} from 'luxon'

export const isoStringToRelativeTime = (isoString: string) =>
	DateTime.fromISO(isoString).toRelative()
```

If you do make it to the Luxon docs, the examples there [are quite decent, showing you how to do things like localisation](https://moment.github.io/luxon/docs/class/src/datetime.js~DateTime.html#instance-method-toRelative 'relative is the key search word!')!

Whatever you do, my advice is to do extract a method for that `toRelativeTime` transformation. It’s the type of advice that is common in engineering, and for good reason!

In this case the benefit is you’d only need to change the internals of your abstraction if you ever wanted to switch out Luxon, instead of changing the implementation everywhere you’re showing a relative time.

Similarly, if you are using Moment.js directly and everywhere in your codebase, it’s a solid idea to abstract it away behind a method first, and then refactor to use something lighter and still heavily supported… like Luxon! Maybe even take inspiration from [these tests](https://github.com/jmagrippis/magrippis/blob/main/src/lib/relativeTime.test.ts 'a use-case for modules AND unit tests!') 😄

## The Demo

[I built this blog with MDX](/blog/2020/how-to-setup-MDX-in-Nextjs 'How to setup MDX in Next.js'), so might as well throw in an interactive demo:

> **Note from 2026:** there was a live playground here — two inputs, one taking a timestamp and one an ISO string, each rendering its “x time ago” as you typed. The blog runs on SvelteKit with plain Markdown now, so the playground is gone. The functions it called are the two below, unchanged.

```ts
import {DateTime} from 'luxon'

export const timestampToRelativeTime = (timestamp: number) =>
	DateTime.fromMillis(timestamp).toRelative()

export const isoStringToRelativeTime = (isoString: string) =>
	DateTime.fromISO(isoString).toRelative()
```

They are still what powers the “x time ago” under every post on [the blog index](/blog) 🙂
