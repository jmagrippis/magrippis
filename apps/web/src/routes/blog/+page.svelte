<script lang="ts">
	import {getBlogCover} from '#lib/blogCovers'
	import RelativeTime from '#lib/components/RelativeTime.svelte'
	import PageTitle from '#lib/components/typography/PageTitle.svelte'
	import {Badge} from '#lib/components/ui/badge'

	import type {PageData} from './$types'

	type Props = {
		data: PageData
	}
	let {data}: Props = $props()
</script>

<main class="container mb-8 pt-10">
	<PageTitle>Blog</PageTitle>

	<ul class="divide-surface-2 divide-y">
		{#each data.posts as post, i (post.href)}
			<li class="py-8">
				<article class="sm:grid sm:grid-cols-3 sm:gap-4">
					<!-- grid placement goes on the link: `enhanced:img` puts its class on
					     the `<img>` inside a `<picture>` -->
					<a
						href={post.href}
						tabindex="-1"
						aria-hidden="true"
						class="mb-4 block place-self-center sm:mb-0"
					>
						<enhanced:img
							src={getBlogCover(post.year, post.slug)}
							alt=""
							fetchpriority={i === 0 ? 'high' : 'auto'}
							loading={i < 3 ? 'eager' : 'lazy'}
							class="sm:shadow-mid w-full sm:rounded"
						/>
					</a>
					<div class="flex flex-col gap-4 px-2 sm:col-span-2">
						<h2 class="text-2xl">
							<a href={post.href}>{post.title}</a>
						</h2>
						<p class="grow text-xl font-extralight">{post.snippet}</p>
						<ul class="flex gap-2 place-self-end font-light">
							{#each post.tags as tag (tag)}
								<li>
									<Badge variant="secondary">{tag}</Badge>
								</li>
							{/each}
						</ul>
						<div class="place-self-end font-extralight">
							<RelativeTime isoString={post.publishedAt} />
						</div>
					</div>
				</article>
			</li>
		{/each}
	</ul>
</main>
