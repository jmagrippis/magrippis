---
title: How to add a custom Tweet CTA to your Next.js page
snippet: I’ve added a little “sharing hub” to my posts, and so can you!
publishedAt: 2020-12-06T15:35:00.000Z
tags:
  - Typescript
  - Nextjs
  - Frontend
---

It’s true, I’ve recently taken the cue from every other blog and added a little “sharing hub” at the end of my posts! Scroll to the bottom of this very page to see it in action 👇

> **Note from 2026:** when I wrote this, the blog was Next.js and the posts were [compiled from MDX](/blog/2020/how-to-setup-MDX-in-Nextjs 'How to setup MDX in Next.js'), so I embedded a second, live copy of the sharing hub right here. The site is SvelteKit now and the posts are plain Markdown, so the hub only appears at the end of the post. The code below is the original React.

Doesn’t _look_ complicated, but I did encounter a couple gotchas making it:

- Getting the URL of a [statically rendered Next.js page](https://nextjs.org/docs/basic-features/pages#static-generation-recommended 'Docs on static generation in Next.js') is not trivial
- The [Twitter API docs](https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/web-intent 'Twitter docs for a Tweet button') don’t hold your hand

So, **in this article we will**:

- Figure out the url to share
- Create a `CopyUrl` button
- Create a custom `Tweet` CTA

![](https://media.giphy.com/media/CjmvTCZf2U3p09Cn0h/giphy.gif)

## What’s our `shareUrl`?

If this was just `window.location.href` I would consider the answer trivial! It’s what you’d do in your regular Single Page App after all, but… If you attempt this on a statically or server-rendered Next.js page, you will likely get:

`window is not defined`

Which of course makes sense: there is no `window` object server-side.

So we’ll need to figure out a different way to get the root url and current path. Our end goal is a url that looks like this:

`https://magrippis.com/blog/2020/how-to-setup-MDX-in-Nextjs`

And let’s create a custom hook, so our components that need the `shareUrl` can get it with a simple function call:

```ts
// src/components/ShareCTA.tsx

export const ShareCTA = () => {
	const shareUrl = useShareUrl()
	// ...
}
```

Alright, API looks good, how would we implement `useShareUrl`? Next.js does provide us with a [useRouter](https://nextjs.org/docs/api-reference/next/router#userouter 'useRouter API in the Next.js docs') hook, which we can use to get the current path. That path is a string which includes query parameters, so it could be something like:

`/blog/2020/how-to-setup-MDX-in-Nextjs?utm_source=instagram`

So we’ll want to sanitise it: a `.replace(/\?.+/, '')` will do the job. So our custom hook ends up being:

```ts
// src/components/useShareUrl.ts

import {useRouter} from 'next/router'

import {rootUrl} from 'constants'

export const useShareUrl = () => {
	const {asPath} = useRouter()

	return `${rootUrl}${asPath.replace(/\?.+/, '')}`
}
```

But wait a minute: What is that `rootUrl` constant? Well, that could be as simple as a hardcoded string of your production domain; in my case, that constants file would be:

```ts
// src/constants.ts

const rootUrl = 'https://magrippis.com'
```

## How can I test this?

The above would do, but **what if we’re BDD-ing**? What if we’re What if we're [E2E testing the Vercel preview deploys of our Pull Requests](https://magrippis.com/blog/2020/how-to-BDD-and-E2E-test-your-responsive-web-app-with-Cypress 'How to BDD and E2E test your responsive web app with Cypress')? In those cases, `rootUrl` should be `http://localhost:3500` in development, and `https://deploy-preview-subdomain-with-unique-hash.vercel.app` in the deploy previews...

In other words, we’d want the `rootUrl` to be dynamic, something to tell us what the deploy domain is. Thankfully, in the Vercel project dashboard you can set up something like this in the settings:

![](/blog/2020/tweet-cta-in-nextjs/vercel-environment-variables.png)

And then amend the constants file to use the new `NEXT_PUBLIC_ROOT_URL` environment variable:

```ts
// src/constants.ts

const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'

export const rootUrl = `${protocol}://${process.env.NEXT_PUBLIC_ROOT_URL}`
```

And have confidence “this actually works” with a Cypress test that looks like this:

```ts
// cypress/integration/blog.spec.ts

it('displays the article in a semantic way', () => {
	const blogPath = 'blog/2020/how-to-setup-MDX-in-Nextjs'
	cy.visit(`/${blogPath}?utm_source=twitch-campaign`)
	const expectedShareUrl = `${Cypress.config().baseUrl}/${blogPath}`

	cy.findByRole('heading', {
		name: 'How to setup MDX in Next.js',
		level: 1,
	}).should('exist')
	cy.findByRole('article').should('exist')

	cy.findByRole('complementary').within(($aside) => {
		cy.findByRole('link', {name: 'tweet'}).should(($anchor) => {
			expect($anchor.attr('href')).to.include('https://twitter.com/intent/tweet?')
		})
		cy.findByRole('button', {name: /copy/i}).click()
		cy.findByRole('button', {name: /copied/i})

		cy.window().then((win) =>
			win.navigator.clipboard.readText().then((text) => expect(text).to.equal(expectedShareUrl)),
		)
	})
})
```

Remember to add to your `.env.development` the correct root when you’re running locally!

```bash
# .env.development
NEXT_PUBLIC_ROOT_URL="localhost:3500"
```

Now, this isn’t a dedicated BDD post, so I won’t get deeper into the actual test; do let me know if you’d like me to elaborate, but the short of it is:

Our Cypress test checks we’ve got a Twitter share button and a Copy Url button. The Twitter assertion is pretty superficial, we’ll be covering the functionality further in a unit test, but the copy assertion does actually check our clipboard to confirm we did copy the correct url!

Of course, at this stage in the article, the test will be failing, which is our cue to move on to the next section and start implementing the components!

![](https://media.giphy.com/media/RIkgfue3mXysO7Gw5h/giphy.gif)

## Using the Clipboard API for a `CopyUrl` button

There are a few libraries that will let you do this while providing maximum browser support, but I trust anybody **cool enough** to wanna share my posts, will be on a modern, evergreen browser 😎

In which case, all we really need is a component that makes use of [Navigator.clipboard](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard 'MDN docs: best docs') looks like this:

```tsx
// src/components/ShareCTA/CopyButton.tsx

import {FC, useCallback} from 'react'

type Props = {
	url: string
}

export const CopyButton: FC<Props> = ({url}) => {
	const handleClick = useCallback(async () => {
		await navigator.clipboard.writeText(url)
	}, [url])

	return <button onClick={handleClick}>copy link</button>
}
```

Simple! Let’s work on the UX though, and tell the user they’ve successfully copied the url:

```tsx
// src/components/ShareCTA/CopyButton.tsx
// ...

export const CopyButton: FC<Props> = ({url}) => {
	const [justCopied, setJustCopied] = useState(false)

	const handleClick = useCallback(async () => {
		await navigator.clipboard.writeText(url)

		setJustCopied(true)
	}, [url])

	return (
		<button onClick={handleClick}>
			{!justCopied ? <span>copy link</span> : <span>copied!</span>}
		</button>
	)
}
```

Can you guess why we went with `justCopied` for the name of the state variable?

It’s because we’ll finish by reverting the text back after a couple seconds!

![](https://media.giphy.com/media/9xwKJOXn0ondCM1AQ4/giphy.gif)

We’ll do it with a `useEffect` that depends on `justCopied`: when `justCopied` is truthy, our effect will set a timeout to turn it back to `false`. And let’s not forget to return the cleanup to remove that timeout:

```tsx
// src/components/ShareCTA/CopyButton.tsx
// ...

  useEffect(() => {
    if (justCopied) {
      const timeout = setTimeout(() => {
        setJustCopied(false)
      }, 2000)

      return () => clearTimeout(timeout)
    }
  }, [justCopied])

  return (
  // ...
```

This gets us there functionality-wise, and that part of the Cypress test will be happy! If you wanna make your component look like mine above, with styling using [Tailwind](https://tailwindcss.com/ 'utility-first CSS framework') and a couple SVG icons for good measure, do have a look straight at [my site’s repo](https://github.com/jmagrippis/magrippis/blob/main/src/components/ShareCTA/CopyButton.tsx 'Open source for learning purposes baby!').

![](https://media.giphy.com/media/LQnk2jb6lUQmQ4pOXA/giphy.gif)

## Using Twitter’s Intent API for a custom `Tweet` CTA

We’re finally at the advertised bit, actually making something to press and “tweet”!

This component will be simpler than our `CopyButton`, although we’ll make it take a couple more Props: the `title` and `tags` of our post, for us to use for the tweet’s body and its hashtags:

```tsx
// src/components/ShareCTA/TweetButton.tsx

import {FC} from 'react'

type Props = {
	title: string
	url: string
	tags: string[]
}

// ...

export const TweetButton: FC<Props> = (props) => <a href={getTwitterHref(props)}>tweet</a>
```

It’s just an anchor element! The complexity lies in `getTwitterHref`, which returns a string according to [Twitter’s Web Intent API](https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/web-intent 'Tweet button docs at Twitter'). Again, there are a couple libraries that can help you construct the query parameters of the `href`, but I like going **native** and using the [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL 'MDN docs on the URL interface') & [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams 'MDN docs on the URLSearchParams interface')interfaces:

```ts
// src/components/ShareCTA/TweetButton.tsx
// ...

export const TWITTER_INTENT_URL = 'https://twitter.com/intent/tweet'
const TWITTER_HANDLE = 'jmagrippis'

export const getTwitterHref = ({url, title, tags}: Props) => {
	const shareUrl = new URL(TWITTER_INTENT_URL)
	const search = new URLSearchParams({
		url,
		text: title,
		hashtags: tags.join(','),
		via: TWITTER_HANDLE,
	}).toString()

	shareUrl.search = search

	return shareUrl.href
}
// ...
```

This gets us there, but _I also like_ throwing an error when we’d be creating a Tweet that’d be too long, which makes our final method:

```ts
// src/components/ShareCTA/TweetButton.tsx
// ...

export const TWITTER_INTENT_URL = 'https://twitter.com/intent/tweet'
const TWITTER_HANDLE = 'jmagrippis'

// `t.co` shortens urls to a max of 23
// https://developer.twitter.com/en/docs/twitter-api/v1/developer-utilities/configuration/api-reference/get-help-configuration
const TWITTER_SHORT_URL_LENGTH = 23
const MAX_TWEET_LENGTH = 280

export const getTwitterHref = ({url, title, tags}: Props) => {
	const shareUrl = new URL(TWITTER_INTENT_URL)
	const search = new URLSearchParams({
		url,
		text: title,
		hashtags: tags.join(','),
		via: TWITTER_HANDLE,
	}).toString()

	const urlLengthDiff = url.length - Math.min(url.length, TWITTER_SHORT_URL_LENGTH)

	if (search.length - Math.max(urlLengthDiff, 0) > MAX_TWEET_LENGTH) {
		throw new Error(`Sharing "${title}" results in a tweet that is too long`)
	}

	shareUrl.search = search

	return shareUrl.href
}
// ...
```

As foretold, I did create dedicated unit tests for what `getTwitterHref` should do:

```ts
import {getTwitterHref, TWITTER_INTENT_URL} from './TweetButton'

describe('getTwitterHref', () => {
	const title = 'How to add a Tweet Button to your blogposts!'
	const url = 'https://magrippis.com/blog/2020/add-a-tweet-button'
	const tags = ['typescript', 'nextjs', 'winning']

	it('points to the Web Intent URL', () => {
		const tweetHref = getTwitterHref({title, url, tags})

		expect(tweetHref).toContain(TWITTER_INTENT_URL)
	})

	it('has the title in the query params', () => {
		const tweetHref = getTwitterHref({title, url, tags})

		expect(tweetHref).toContain('text=How+to+add+a+Tweet+Button+to+your+blogposts')
	})

	it('has the url in the query params', () => {
		const tweetHref = getTwitterHref({title, url, tags})

		expect(tweetHref).toContain(
			'url=https%3A%2F%2Fmagrippis.com%2Fblog%2F2020%2Fadd-a-tweet-button',
		)
	})

	it('has the via @jmagrippis in the query params', () => {
		const tweetHref = getTwitterHref({title, url, tags})

		expect(tweetHref).toContain('via=jmagrippis')
	})

	it('has the comma-separated tags in the query params', () => {
		const tweetHref = getTwitterHref({title, url, tags})

		expect(tweetHref).toContain('tags=typescript%2Cnextjs%2Cwinning')
	})

	it('errors out if the title is too long', () => {
		const url =
			'https://magrippis.com/blog/2020/this-url-will-be-truncated-by-twitter-so-its-length-should-not-affect-the-test-and-therefore-I-am-not-using-the-actual-title-below'
		const title =
			'This is soooooo long we should probably have a much catchier title what do you think friends? The problem is that we do want this to throw and now that the url is not a problem it is hard to get there without an absurdly long title!'
		const tags = [
			'the-hashtags',
			'are-not-helping',
			'neither',
			'crash',
			'EpicFail',
			'testInProduction',
		]

		expect(() => getTwitterHref({url, title, tags})).toThrow(
			`Sharing "${title}" results in a tweet that is too long`,
		)
	})

	it('takes into account that the url will be shortened to a maximum of 23 characters', () => {
		const url =
			'https://magrippis-git-jma-47-share-url-and-custom-tweet-button-on-a.jmagrippis.vercel.app/blog/2020/how-to-BDD-and-E2E-test-your-responsive-web-app-with-Cypress'
		const title = 'How to BDD and E2E test your responsive web app with Cypress'
		const tags = ['Typescript', 'Frontend']

		expect(() => getTwitterHref({url, title, tags})).not.toThrow()
	})
})
```

We could also be testing on a slightly higher level, rendering our `TweetButton` with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/ 'React adapter for the library with testing utilities that encourage good testing practices') and checking the `href` of the link element we expect to find, but...

We **are** covering some of that with our Cypress test, so we would be adding a bit more test scaffolding for not much more confidence; so this is one of the cases where I prefer the zoomed-in unit test!

Testing Library is great for helping you avoid implementation details, but in this case we want to ensure we’re conforming with the very specific implementation we need against Twitter’s Web Intent API, so let’s dodge it and avoid triggering [Kent’s](https://kentcdodds.com/ 'creator of Testing Library') spidey-sense.

Besides, we’re done!

![](https://media.giphy.com/media/clspXK4twFiGjTwxOZ/giphy.gif)

## Putting it all together

With our `CopyButton` & `TweetButton` all good and ready, all we need to do is use them in `ShareCTA`:

```tsx
// src/components/ShareCTA/ShareCTA.tsx

import {FC} from 'react'

import {CopyButton} from './CopyButton'
import {TweetButton} from './TweetButton'
import {useShareUrl} from './useShareUrl'

type Props = {
	title: string
	tags: string[]
}

export const ShareCTA: FC<Props> = ({title, tags}) => {
	const shareUrl = useShareUrl()

	return (
		<aside>
			<div>💜 sharing is caring 💜</div>
			<div>
				<TweetButton title={title} tags={tags} url={shareUrl} />
				<CopyButton url={shareUrl} />
			</div>
		</aside>
	)
}
```

And we’re done!

![](https://media.giphy.com/media/l0Iyl55kTeh71nTXy/giphy.gif)

Well, if we do want some fancier styling, we can always have another look at my site’s repo, to see exactly how I used Tailwind to style my [TweetButton](https://github.com/jmagrippis/magrippis/blob/main/src/components/ShareCTA/TweetButton.tsx 'apologies for the inline styles') and [ShareCTA](https://github.com/jmagrippis/magrippis/blob/main/src/components/ShareCTA/ShareCTA.tsx), and freely lift things as needed 😄

## What about rich previews?

Links to my site get snippets with nice preview images and appropriate descriptions thanks to [NextSEO](https://github.com/garmeeh/next-seo 'a plugin that makes managing your SEO easier in Next.js projects'). Give the tweet button a go, and you’ll see what I mean 😉

NextSEO is a handy library which takes care of the boilerplate for injecting meta tags according to the [OpenGraph Protocol](https://ogp.me/), and more! Do let me know if you’d want me to go deeper into how I’ve set that up.

Until then, I’m calling it: **mission accomplished**!

![](https://media.giphy.com/media/26u4lOMA8JKSnL9Uk/giphy.gif)
