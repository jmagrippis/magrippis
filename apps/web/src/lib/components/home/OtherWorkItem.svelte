<script lang="ts">
	import type {Picture} from '@sveltejs/enhanced-img'
	import type {Snippet} from 'svelte'

	type Props = {
		name: string
		image: Picture
		/** Puts the picture on the right, so the column zig-zags down the page. */
		reversed?: boolean
		children: Snippet
	}
	let {name, image, reversed = false, children}: Props = $props()
</script>

<article class="grid gap-4 xl:grid-cols-5 xl:gap-8 2xl:gap-16">
	<!-- layout goes on the wrapper: `enhanced:img` puts its class on the `<img>`
	     inside a `<picture>`, so the grid child would be unstyled -->
	<div class={['xl:col-span-3', reversed && 'xl:order-2']}>
		<enhanced:img
			src={image}
			alt="Johnny {name}!"
			loading="lazy"
			class="shadow-low w-full rounded-lg"
		/>
	</div>

	<div
		class={[
			'relative -top-12 -mb-8 xl:top-0 xl:mb-0',
			'xl:col-span-2 xl:flex xl:flex-col xl:justify-center',
			reversed && 'xl:order-1',
		]}
	>
		<h3
			class="border-emphasis bg-surface-1/80 text-emphasis mb-6 rounded-b-lg border-b px-2 text-2xl font-bold backdrop-blur-xs xl:mb-2 xl:self-start xl:rounded-lg"
		>
			{name}
		</h3>
		<div class="flex flex-col gap-2 text-lg">
			{@render children()}
		</div>
	</div>
</article>
