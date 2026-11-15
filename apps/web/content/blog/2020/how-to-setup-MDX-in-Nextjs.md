---
title: How to setup MDX in Next.js
snippet: I enhanced my blogposts with interactive React components, and so can you!
publishedAt: 2020-04-22T09:02:22.000Z
tags:
  - Typescript
  - Nextjs
  - Frontend
---

## The what

[Next.js](https://nextjs.org/ 'if you thought this page loaded fast, they’re part of the why!') is a framework for isomoprhic React apps. It makes it easy to write blazing fast websites, by rendering them on the server first for a speed and SEO boost. The client takes over after, to get the seamless UX of a Single Page App.

[Markdown](https://daringfireball.net/projects/markdown/ 'maybe the wikipedia article would be more informative, but it’s always nice to link the source') is a minimal markup language. It makes it easy to write!

**HTML**, the most famous markup language for instance, renders beautifully but is hard to read in raw form… **Markdown** however, may be parsed into HTML for your browser to render just as beautifully, but even when you see it raw through your human eyeballs, you can tell what is a title, what is a list, what is emphasised… It’s just brilliant, and it’s especially popular with developers.

Its popularity has not stopped there however: [Ulysses](https://ulysses.app/ 'A pleasant, focused writing experience based on markdown') is a prime example of a slick writing app that has adopted it to great success.

So that ’s Markdown, MD! [MDX](https://mdxjs.com/ 'Markdown for the component era') is markdown with JSX support, which pretty much means you can embed React components in your posts!

But why?!

## The why

A common use-case would be to render a component for your readers to mess around with… Given this whole site is using Next.js and I just brought in MDX support, I can show rather than tell:

> **Note from 2026:** a live React button used to sit right here, and tapping it toggled it from purple to green. This site is SvelteKit now and its posts are plain Markdown, so the demo is gone — but the code below is exactly what was running.

And then even inline the code of the above component:

```tsx
import {useState} from 'react'
import cn from 'classnames'

export const Demonstration = () => {
	const [tapped, setTapped] = useState(false)

	return (
		<button
			type="button"
			className={cn('shadow-lg rounded p-4 text-center transition duration-300', {
				'bg-teal-200 text-teal-900': tapped,
				'bg-purple-600 text-purple-100': !tapped,
			})}
			onClick={() => setTapped(!tapped)}
		>
			🤜 Tap this React Component 🤛
		</button>
	)
}
```

Isn’t that cool?!

![that IS cool](./how-to-setup-MDX-in-Nextjs/that-is-cool.webp 'that IS cool')

And if you think it’s cool enough to bring in your own Next.js blog, well, you’re in luck, as the next section is…

## The how

### Config

The library we’ll be using is [next-mdx-enhanced](https://github.com/hashicorp/next-mdx-enhanced 'A Next.js plugin that enables MDX pages, layouts, and front matter'). It is not the [official plugin by the Nextjs team](https://github.com/zeit/next.js/tree/master/packages/next-mdx 'made by the next team'), which is workable but has you jumping through hoops to make a “blog index” page with all your posts, and to get front-matter support.

**Front-matter** is useful metadata you may put at the front of your `.mdx` files and use for things like titles, or tags, or thumbnails and summaries for social share cards.

So first step is to bring that library in!

```bash
yarn add next-mdx-enhanced
```

The plugin uses an `.mdx-data` directory for caching, so let’s add it to our `.gitignore` at this point.

Since I’m putting code snippets in my markdown, and if you’re thinking of using MDX you probably will be too, let’s bring in a library that adds classes to style those snippets nicely! I went with [rehype-prism](https://github.com/mapbox/rehype-prism 'highlight code blocks in HTML with Prism'):

```bash
yarn add @mapbox/rehype-prism
```

Our goal with those two libraries is to initialise the `Next.js` plugin that will sort mdx out for us. In our code we’ll do something like:

```js
const rehypePrism = require('@mapbox/rehype-prism')

const mdx = require('next-mdx-enhanced')({
	defaultLayout: true,
	fileExtensions: ['mdx', 'md'],
	rehypePlugins: [rehypePrism],
})
```

Depending on how you’ve set up your `Next.js` site, you may or may not have a `next.config.js` at the root of your repository. If you **do**, you will need to pipe that `const mdx` to your existing configuration. If you **do not**, just create an empty file and paste the below.

In either case, I do suggest adding one more library, one that makes using multiple plugins with `Next.js` much easier. It’s no worse when you’re using only one, but the moment you use _more than one_, it really helps keep things readable. So let’s bring in [next-compose-plugins](https://github.com/cyrilwanner/next-compose-plugins 'a cleaner API for enabling and configuring plugins for next.js'):

```bash
yarn add next-compose-plugins
```

And here’s how our complete `next.config.js` may look like:

```js
const withPlugins = require('next-compose-plugins')
const rehypePrism = require('@mapbox/rehype-prism')

const mdx = require('next-mdx-enhanced')({
	defaultLayout: true,
	fileExtensions: ['mdx', 'md'],
	rehypePlugins: [rehypePrism],
})

// you may tweak other base Next options in this object
// we are using it to tell Next to also handle .md and .mdx files
const nextConfig = {pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md']}

module.exports = withPlugins(
	[
		mdx,
		// you may add more plugins, and their configs, to this array
	],
	nextConfig,
)
```

### Content

The config above gets us most of the way there, but of course now we need some MDX to render! So let’s create an `.mdx` file!

It may be anywhere inside our `pages` directory and `Next.js` will resolve it as it would a “regular” javascript/typescript file. I’ve created this `pages/blog/mdx-ftw.mdx` file, and of course the name content could be anything adhering to the format, but feel free to copy & paste the below:

````md
---
title: MDX FTW
timestamp: 1587386236000
snippet: I got React components to render in my blogposts, and I love it
---

import {Demonstration} from '../../components/blog/Demonstration'

It means two big things:

## I can render React Components

> **Note from 2026:** the same live button was demonstrated here. See the note above.

## I can render code blocks nicely

```tsx
import {useState} from 'react'

const regularStyles = {
	backgroundColor: '#40C9A2',
	color: '#E5F9E0',
}
const tappedStyles = {
	backgroundColor: '#E5F9E0',
	color: '#40C9A2',
}

export const Demonstration = () => {
	const [tapped, setTapped] = useState(false)

	return (
		<div style={tapped ? tappedStyles : regularStyles} onClick={() => setTapped(!tapped)}>
			🤜 Tap this React Component 🤛
		</div>
	)
}
```
````

The properties between the `---`s, the front-matter, can be anything you’d want to use in your layout file; their names have no special significance.

Your `import`s should resolve to components relative to the `.mdx` file, as you might expect! I prefer putting all components that are just used in my blog section in `components/blog`, so for this example I created a `components/blog/Demonstration.tsx` file, which contains what is also in the code block after it!

With those two files set, you might expect navigating to `/blog/mdx-ftw` would **just work**, but we have one more step: we have to create our default layout!

### Layout

When I said the front-matter property names have no special significance it was only _mostly_ true. There is one that does mean something by default to `next-mdx-enhanced`: `layout`. You may use it to specify which layout the mdx content should be nested in, so you may have a `layouts/docs` and a `layout/blog`, and even a `layout/your-wildest-dreams` according to the occasion.

In our case, we’ve also passed the `defaultLayout: true` in the plugin config before, so instead of specifying the layout on every blogpost, we may just create a `layouts/index.tsx` that everything will be falling back to when there is no `layout` property in the front-matter. So let’s create that file!

```tsx
import {ReactNode} from 'react'
import cn from 'classnames'

type FrontMatter = {
	title: string
	snippet: string
}

export default ({title, snippet}: FrontMatter) =>
	({children}: {children: ReactNode}) => (
		<div>
			<h1>{title}</h1>
			<p>{snippet}</p>
			<section>{children}</section>
		</div>
	)
```

It’s somewhat funky, as the default export has to be a Higher Order Component type of thing, which is soooo 2018; but hopefully it makes some sense: The first method takes all the properties in the front-matter as an argument, and the second has all of the parsed mdx, everything after the front-matter, as `children`.

At this point, navigating to `/blog/mdx-ftw` will work, check it out!

![it worked!](./how-to-setup-MDX-in-Nextjs/it-worked.webp 'it worked!')

Great job!

### Styling

The mdx content will be there, it will have correctly been transformed to the equivalent html, but, according to how you’ve set up your styles, it might be looking a bit… plain. I know I always declare a “style reset” at the start of all of my apps, so headers are indistinguishable from paragraphs for example, unless I explicitly style them. This helps me keep an important habit, using different html tags for semantics, not for styling!

So how _do we_ explicitly style the mdx output?

We could configure the plugin with a map for the components to use in each case: give it a Styled Component to use for `p`s, a regular component with some css classes from [Tailwind.css](https://tailwindcss.com/ 'a utility-first CSS framework') to use for `h2`s, anything we’d like.

Or we could do it with CSS modules! Nothing wrong with any approach, but this is the one I find to be the most straightforward. So let’s create a `layouts/mdx.module.css` that looks something like this:

```css
.container > *,
.container section > * {
	margin-bottom: 0.5rem;
}

.container h1 {
	font-size: 2.25rem;
}

.container h2 {
	font-size: 1.875rem;
}

/* Add your own styles as you fancy them */
```

And let’s import it in our layout file:

```tsx
import { ReactNode } from 'react'

import styles from './mdx.module.css'

// ...

=> (
  <div className={styles.container}>
    <h1>{title}</h1>
    <p>{snippet}</p>
    <section>{children}</section>
  </div>
)

```

This should make our post easier to read! How about we make it a bit more… **shareable**, by tweaking its metadata?

### Metadata

For this I’m using yet another third party library, [Next SEO](https://github.com/garmeeh/next-seo 'manage your SEO easily in Next.js projects'), as it does take care of a lot of the boilerplate needed to have things like Open Graph attributes that get you pretty cards when sharing on social media. Let’s add it to our project with:

```bash
yarn add next-seo
```

And amend `/blog/mdx-ftw.mdx` to use it:

```tsx
import {NextSeo} from 'next-seo'

// ...

export default ({title, snippet}: FrontMatter) =>
	({children}: {children: ReactNode}) => (
		<>
			<NextSeo title={title} description={snippet} />
			<div className={styles.container}>
				<h1>{title}</h1>
				<p>{snippet}</p>
				<section>{children}</section>
			</div>
		</>
	)
```

An image is worth a thousand words, so how would we go about configuring a bespoke image to show depending on the article? I propose nesting all of the blog images into `components/blog/images` and creating a `components/blog/FeaturedImage.tsx` component that looks like this:

```tsx
import {NextSeo} from 'next-seo'

import mdxFtw from './images/mdx-ftw.jpg'
import {rootUrl} from '../../lib/constants'

const titlesToImages = {
	'MDX FTW': mdxFtw,
}

type Props = {
	title: string
}

export const FeaturedImage = ({title}: Props) => {
	const imageSrc = titlesToImages[title]

	return imageSrc ? (
		<>
			<NextSeo
				openGraph={{
					images: [
						{
							url: `${rootUrl}${imageSrc}`,
							width: 2048,
							height: 1152,
							alt: `Featured image for ${title}`,
						},
					],
				}}
				twitter={{
					handle: '@aTwitterHandle',
					cardType: 'summary_large_image',
				}}
			/>
			<img src={imageSrc} />
		</>
	) : null
}
```

`rootUrl` must equal to the root of wherever your blog gets deployed to; unfortunately these things will not work with relative urls.

That `titlesToImages` map needs to be updated manually with every new post, a nice thing to optimise once you’ve got more than a handful! I’m conscious of the length of this article, so I will simply point to [a babel plugin for glob imports](a%20babel%20plugin%20for%20glob%20imports "it's called "babel-plugin-import-glob-array""); please do let me know and I’ll to go into further detail.

Glob imports would also help us get all of our posts from the `pages/blog` directory, if we wanted a page that lists all of them; which **we do** but we’ll make do with the manual approach in the next section. Before that, let’s not forget to render our new component in `layouts/index.tsx`!

```tsx
import { FeaturedImage } from '../components/blog/FeaturedImage'

// ...

=> (
  <>
    <NextSeo title={title} description={snippet} />
    <div className={styles.container}>
      <h1>{title}</h1>
      <p>{snippet}</p>
      <FeaturedImage title={title} />
      <section>{children}</section>
    </div>
  </>
)
```

Should work a treat, and that’s the last we’ll be messing with these files!

But even though we’ve set up the posts to render for their appropriate URLs, you may only navigate to them directly, only if you know those URL! So let’s finish strong by scaffolding an index page that can navigate to all of them!

### Creating a blog index

Having `/blog` resolve to something is done via the common Next.js way: by defining a `pages/blog/index.tsx` which has a React component as its default export.

`next-mdx-enhanced` gives us a `__resourcePath` along with the front-matter it parses, which we’ll use to link to the blog posts.

Given those two pieces of knowledge, let’s create a `pages/blog/index.tsx` that looks like this:

```tsx
import Link from 'next/link'

import {frontMatter as mdxFtw} from './mdx-ftw.mdx'

const pages = [mdxFtw]

const formatPath = (p: string) => p.replace(/\.mdx$/, '')

const BlogIndex = () => (
	<>
		<h1>Blog</h1>
		<ul>
			{pages.map((page) => (
				<li key={page.__resourcePath}>
					<Link href={formatPath(page.__resourcePath)}>
						<a>
							<h2>{page.title}</h2>
							<p>{page.snippet}</p>
						</a>
					</Link>
				</li>
			))}
		</ul>
	</>
)

export default BlogIndex
```

This _would have worked_, if Typescript had any idea how our current setup resolves `.mdx` files! We have to clarify by declaring the `*.mdx` module somewhere. I’ve setup my `tsconfig.json` to include my `global.d.ts` file in the root, where I also specify what `.svg` and `.jpg` imports resolve to, so this is where I’ll be adding this snippet:

```ts
declare module '*.mdx' {
	import {ReactNode} from 'react'

	export const frontMatter: {
		title: string
		snippet: string
		timestamp: number
		__resourcePath: string
		// type additional properties according to
		// the front-matter you define
	}

	const component: ReactNode
	export default ReactNode
}
```

After that, Typescript will be happy, the code will transpile, and navigating to `/blog` will give us a list of all of our MDX pages. Yep, all one of “them”, and clicking on “them” will get us to the complete article!

Again, have a look at [babel-plugin-import-glob-array](https://github.com/jescalan/babel-plugin-import-glob-array 'import many files using glob pattern matching') if you don’t fancy updating that `pages` array manually, or let me know and I’ll follow up this post with an explanation of how to set that up.

More important at this point would be to style those pages nicely and, hey, how about writing more posts?

But before doing either, make sure to pat yourself in the back: we did it, we set up MDX in our Next.js app! 👏🏼🥳🎉

![we did it!](./how-to-setup-MDX-in-Nextjs/we-did-it.webp 'we did it!')
