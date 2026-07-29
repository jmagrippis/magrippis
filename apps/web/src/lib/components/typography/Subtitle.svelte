<script lang="ts">
	import type {Snippet} from 'svelte'
	import type {HTMLAttributes} from 'svelte/elements'

	import {cn} from '#lib/utils'

	type Props = {
		children: Snippet
	} & HTMLAttributes<HTMLHeadingElement>
	let {children, class: className, ...restProps}: Props = $props()
</script>

<h2
	class={cn('text-emphasis mb-6 text-4xl font-bold drop-shadow-md sm:mb-10', className)}
	{...restProps}
>
	{@render children()}
</h2>
