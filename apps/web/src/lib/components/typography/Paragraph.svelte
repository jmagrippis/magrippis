<script lang="ts">
	import type {Snippet} from 'svelte'
	import type {HTMLAttributes} from 'svelte/elements'

	import {cn} from '#lib/utils.js'

	type Props = {
		children: Snippet
	} & HTMLAttributes<HTMLParagraphElement>
	let {children, class: className, ...restProps}: Props = $props()
</script>

<p
	class={cn('container max-w-prose px-2 text-center text-2xl sm:py-4 lg:mb-8', className)}
	{...restProps}
>
	{@render children()}
</p>
