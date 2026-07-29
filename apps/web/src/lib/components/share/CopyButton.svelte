<script lang="ts">
	import CheckIcon from '~icons/brand/check'
	import LinkIcon from '~icons/brand/link'

	type Props = {
		url: string
	}
	let {url}: Props = $props()

	let justCopied = $state(false)

	const copy = async () => {
		await navigator.clipboard.writeText(url)
		justCopied = true
	}

	$effect(() => {
		if (!justCopied) return

		const timeout = setTimeout(() => {
			justCopied = false
		}, 2000)
		return () => clearTimeout(timeout)
	})
</script>

<button
	type="button"
	class="bg-surface-1 shadow-low hover:bg-primary-200 hover:shadow-mid dark:hover:bg-primary-800 relative inline-flex rounded py-2 pr-5 pl-4 transition duration-300 ease-in-out"
	onclick={copy}
>
	<span class={['flex items-center justify-center', justCopied && 'opacity-0']}>
		<LinkIcon class="mr-2 w-8" /> copy link
	</span>
	<span
		aria-hidden={!justCopied}
		class={['absolute flex items-center justify-center', !justCopied && 'opacity-0']}
	>
		<CheckIcon class="text-secondary-300 mr-2 w-8" /> copied!
	</span>
</button>
