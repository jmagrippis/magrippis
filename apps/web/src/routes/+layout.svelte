<script lang="ts">
	import '@fontsource-variable/trispace'
	import {page} from '$app/state'
	import {ModeWatcher} from 'mode-watcher'

	import '../app.css'

	import type {Snippet} from 'svelte'

	import Footer from '#lib/components/Footer.svelte'
	import Header from '#lib/components/Header.svelte'
	import {SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL, TWITTER_HANDLE} from '#lib/constants'

	type Props = {
		children: Snippet
	}
	let {children}: Props = $props()

	let title = $derived(page.data.meta?.title ? `${page.data.meta.title} | jmagrippis` : SITE_TITLE)
	let description = $derived(page.data.meta?.description ?? SITE_DESCRIPTION)
	let canonicalUrl = $derived(`${SITE_URL}${page.url.pathname}`)
	let ogImage = $derived(`${SITE_URL}${page.data.meta?.image ?? '/og/home.png'}`)

	$effect(() => {
		// Add data-testid now that our app is hydrated
		// We have Playwright "wait" for this before starting any test
		document.documentElement.dataset.testid = 'hydrated'
	})
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonicalUrl} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content="@{TWITTER_HANDLE}" />
</svelte:head>

<ModeWatcher
	track={false}
	defaultMode="dark"
	defaultTheme="dark"
	disableTransitions={false}
	darkClassNames={[]}
/>

<Header />

{@render children()}

<Footer />
