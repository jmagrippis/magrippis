<script lang="ts">
	import {onMount} from 'svelte'

	import {isoStringToAbsoluteDate, isoStringToRelativeTime} from '#lib/relativeTime'

	type Props = {
		isoString: string
	}
	let {isoString}: Props = $props()

	// prerendered, so a build-time "3 hours ago" would never move: the absolute
	// date is server-rendered, then upgraded once "now" means now
	let mounted = $state(false)
	onMount(() => {
		mounted = true
	})

	let label = $derived(
		mounted
			? (isoStringToRelativeTime(isoString) ?? isoStringToAbsoluteDate(isoString))
			: isoStringToAbsoluteDate(isoString),
	)
</script>

<time datetime={isoString}>{label}</time>
