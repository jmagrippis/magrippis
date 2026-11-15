<script lang="ts">
	import type {Snippet} from 'svelte'
	import type {HTMLAttributes} from 'svelte/elements'

	import {cn} from '#lib/utils.js'

	type Props = {
		children: Snippet
	} & HTMLAttributes<HTMLHeadingElement>
	let {children, class: className, ...restProps}: Props = $props()
</script>

<h1
	class={cn(
		'from-secondary-600 via-primary-500 to-primary-400 dark:from-secondary-500 dark:via-primary-400 dark:to-primary-200 bg-gradient-to-bl from-50% bg-clip-text px-2 py-1 text-5xl font-extrabold text-transparent drop-shadow lg:text-6xl xl:text-7xl',
		className,
	)}
	{...restProps}
>
	{@render children()}
</h1>
