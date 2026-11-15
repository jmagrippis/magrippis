<script lang="ts">
	import {onMount} from 'svelte'

	import {isoStringToAbsoluteDate, isoStringToRelativeTime} from '#lib/relativeTime.js'

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

	let absoluteDate = $derived(isoStringToAbsoluteDate(isoString))
</script>

<!-- the upgrade is a new element, so swapping it in draws text rather than shifting it -->
{#if mounted}
	<time datetime={isoString} class="animate-fade-in"
		>{isoStringToRelativeTime(isoString) ?? absoluteDate}</time
	>
{:else}
	<time datetime={isoString}>{absoluteDate}</time>
{/if}
