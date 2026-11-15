<script lang="ts">
	import {getBlogCover} from '#lib/blogCovers.js'
	import RelativeTime from '#lib/components/RelativeTime.svelte'
	import ShareCTA from '#lib/components/share/ShareCTA.svelte'
	import {Button} from '#lib/components/ui/button/index.js'
	import {SITE_URL} from '#lib/constants.js'
	import {proseClasses, proseColumnSizes} from '#lib/sharedClasses.js'

	import type {PageData} from './$types'

	type Props = {
		data: PageData
	}
	let {data}: Props = $props()

	let post = $derived(data.post)
	let shareUrl = $derived(`${SITE_URL}${post.href}`)
</script>

<main class="pb-8">
	<article class="container {proseClasses}">
		<h1
			class="from-secondary-600 via-primary-500 to-primary-400 dark:from-secondary-500 dark:via-primary-400 dark:to-primary-200 bg-gradient-to-bl from-50% bg-clip-text px-2 text-transparent drop-shadow"
		>
			{post.title}
		</h1>

		<div class="not-prose px-2 font-extralight">
			<RelativeTime isoString={post.publishedAt} />
		</div>

		<enhanced:img
			src={getBlogCover(post.year, post.slug)}
			alt=""
			sizes={proseColumnSizes(0)}
			fetchpriority="high"
		/>

		<!-- eslint-disable-next-line svelte/no-at-html-tags -- built at compile time from our own markdown -->
		<section class="px-2">{@html post.html}</section>

		<ShareCTA class="not-prose mx-2" title={post.title} tags={post.tags} url={shareUrl} />

		<Button
			href="/blog"
			variant="secondary"
			class="bg-surface-2 mx-2 block py-4 text-center text-lg font-semibold no-underline"
		>
			Check out all posts
		</Button>
	</article>
</main>
