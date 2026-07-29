---
title: How to use Tailwind.css with SvelteKit
snippet: Add the utility-first CSS framework to the new “Next.js, but for Svelte” solution, and build apps faster than ever!
publishedAt: 2021-04-05T16:25:00.000Z
tags:
  - Svelte
  - SvelteKit
  - Typescript
  - Frontend
---

## Prologue

A few months ago I was trialing a different sharing format for my adventures in engineering: YouTube! I was playing around with [SvelteKit](https://kit.svelte.dev/ 'The fastest way to build Svelte apps'), still under wraps and extremely heavy development, and had a hard time configuring [Tailwind.css](https://tailwindcss.com/ 'Rapidly build modern websites without ever leaving your HTML') to work with it. So I made this video showing how: [Tailwind with SvelteKit](https://www.youtube.com/watch?v=iA5_LdfypTM 'Tailwind with SvelteKit')!

SvelteKit has since switched to using [Vite](https://vitejs.dev/ 'Next Generation Frontend Tooling') as the bundler, officially went into Beta last week, and has straightforward [docs](https://kit.svelte.dev/docs "If I didn't have any MDX I would have transitioned to it already!") finally open to the public. I’ve been loving building small stuff with it, it’s at the point where I can heartily recommend you give it a shot!

![](https://media.giphy.com/media/SwrtjuaZWnjVnfe9J6/giphy.gif 'give it a shot!')

Some third-party libraries, especially those involving http requests, may give you trouble, but if you’re willing to get closer to the metal you’ll make it work… For example, I had to drop the official Airtable client, and write my own requests to their API using `node-fetch` directly.

I suspect it’s something in the bundling which stops the Airtable library from properly detecting whether it’s running on the server or the browser, and using node-fetch or the native browser fetch accordingly, but, well, that’s by the by:

This article is about **setting up Tailwind**, which does still work, with less effort even! Give [my video](https://www.youtube.com/watch?v=iA5_LdfypTM 'Tailwind with SvelteKit') a watch for more context on Tailwind and SvelteKit, but you shouldn’t need to deal with any server crashes, hidden dependencies, or long recompile times.

And if you’re just looking for some commands to read and copy & paste, well, do I have the sections for you, coming right up 🚀

## Initialising our SvelteKit app

As per the [SvelteKit docs](https://kit.svelte.dev/docs#introduction-getting-started 'They really are straightforward!'), initialise a new SvelteKit project by running:

```bash
mkdir APP-NAME-HERE
cd APP-NAME-HERE
# Feel free to use `yarn`, `pnpm`,
# or whichever package manager you prefer
npm init svelte@next
```

This will start the SvelteKit setup wizard, which will kindly ask whether you’d like to setup Typescript, ESLint and Prettier, as well as which flavour of CSS you’d prefer. Personally, I do opt-in to everything and go with the `CSS` option as the styling solution.

The wizard is also a work in progress, so if you do see a PostCSS option when you run it, do go for it!

Once the wizard finishes, install dependencies, and start the dev server:

```bash
npm install
npm run dev
```

This will get your server running on `http://localhost:3000`.

I also suggest running a `git init` at this stage, it may help your IDE realise which files it should be ignoring; I know my VSCode gets a bit overwhelmed by what’s happening in the `.svelte` directory otherwise!

Open your IDE and nuke all `<style>` tags. You’ll find some in `src/routes/index.svelte` and `src/lib/Counter.svelte`, and we won’t be needing them: we’ll be styling with Tailwind!

The app will instantly update to look… _plainer_, but not perfectly plain: Once we bring in Tailwind, it will apply a style reset for us, so things will look the same across browsers; we can use that as confirmation our setup worked.

## Adding Tailwind

Moving on to the [Tailwind docs](https://tailwindcss.com/docs/installation#install-tailwind-via-npm 'They have so many examples!'), we find what to run next:

```bash
npm i -D tailwindcss@latest postcss@latest autoprefixer@latest
# remember to use the same package manager as above!
```

Then, we need to create a PostCSS config file as instructed, but there is a catch: **we need to use the `.cjs` extension to declare it as a CommonJS module**: SvelteKit / Vite needs it in that format to ingest it, at least for now! So let’s create `postcss.config.cjs` in our project root:

```js
// postcss.config.cjs
module.exports = {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
	},
}
```

There is a chance your IDE will not like that `.cjs` extension: Don’t worry about any squiggly lines if so, the above is perfectly valid!

With the dependencies installed and the PostCSS config above, we can **kill and restart the server**, and we’ll be most of the way there: No further restarts needed for the remaining of the article!

The only truly essential thing left, is to import the… Tailwind CSS files themselves! So, let’s create a `src/tailwind.css` file:

```postcss
/* src/tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

If we want every page and component in our app to be able to use Tailwind classes, which we probably do, we can import that file we just created, into our root layout file, `src/routes/$layout.svelte`:

```svelte
<!--  src/routes/$layout.svelte -->
<script>
	import '../tailwind.css'
	import '../app.css'
</script>

<slot />
```

The way SvelteKit works, every route resolved will be rendered in that `slot`: similar to how, in Next.js, Pages can get rendered inside a custom `_app` component.

Which means, every route in our app will have Tailwind imported… so our lone `index` route too, should have the style reset we mentioned earlier instantly applied! We're in!

Let’s go to `src/lib/Counter.svelte` and add a few classes to the button, to further prove our success:

```svelte
<!--  src/lib/Counter.svelte -->
<button class="shadow rounded bg-gray-900 px-6 py-2 text-2xl text-white" on:click={increment}>
	Clicks: {count}
</button>
```

Our app should instantly update again, giving us a fancier button: Awesome!

![](https://media.giphy.com/media/mXnO9IiWWarkI/giphy.gif 'Awesome!')

## Purging and configuring Tailwind

To give our app a more distinct feel besides “vanilla Tailwind”, and to properly purge unused classes, we should create a `tailwind.config.cjs`. Again, the `.cjs` extension is essential!

```js
// tailwind.config.cjs
const colors = require('tailwindcss/colors')

module.exports = {
	purge: ['./src/**/*.svelte', './src/**/*.css'],
	darkMode: false,
	theme: {
		colors: {
			white: colors.white,
			gray: colors.stone,
			'svelte-prime': '#ff5030',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
```

You can read more about the Tailwind configuration object in [the official docs](https://tailwindcss.com/docs/configuration 'so many options'). The most important thing above is the `purge` property, where we specify we want to scan `.svelte` and `.css` files for usage of Tailwind classes, but we’ve also limited our colour palette and specified a new `svelte-prime` colour. Let’s use it on our button!

```svelte
<!--  src/lib/Counter.svelte -->
<button
	class="bg-svelte-prime-900 shadow rounded px-6 py-2 text-2xl text-white"
	on:click={increment}
>
	Clicks: {count}
</button>
```

Quite on-brand!

## Composing classes with @apply

At this point, we are able to use Tailwind in our app, in every way described in the docs! So, let’s end by composing a `button` class out of a handful of Tailwind utility classes, use it in our Counter, and make a bouncier button while we’re at it.

First, we’ll update our Counter component:

```svelte
<!--  src/lib/Counter.svelte -->
<button class="button" on:click={increment}>Clicks: {count}</button>
```

This will remove all styling, since we haven’t defined that class yet! Let’s extend our config so we can apply a different inset while the button is active:

```js
// tailwind.config.cjs
// ...
module.exports = {
	// ...
	variants: {
		extend: {inset: ['active']},
	},
}
```

Finally, let’s create our composed `.button`: you may create a new CSS file for your composed classes, or add to the `src/app.css` file the SvelteKit wizard created for us, or add to the `src/tailwind.css` file we created earlier, which would look like this:

```postcss
/* src/tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

.button {
	@apply bg-svelte-prime shadow relative rounded px-6 py-2 text-2xl text-white active:top-0.5;
}
```

In any case, defining this `button` class will re-style our button element nicely. Give it a few clicks to confirm we did make it bouncy!

I’ve scaffolded [a sample repo](https://github.com/jmagrippis/tailwind-with-sveltekit 'I called it tailwind-with-svelte') with the code above for your perusal, and I’d be interested in knowing if you followed along, and if you’ve tried out SvelteKit! Feel free to reach out 🙌
