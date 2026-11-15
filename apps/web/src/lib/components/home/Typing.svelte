<script lang="ts">
	import {onMount, untrack} from 'svelte'

	import {shuffleArray} from '#lib/shuffleArray.js'

	import {CURSOR, titles} from './titles'

	type Props = {
		/** Whether the titles type; while they don't, the current one shows whole. */
		animating: boolean
		/** The reader has paused or played: only the autoplay on load lingers on the whole title first. */
		hasToggled: boolean
	}
	let {animating, hasToggled}: Props = $props()

	const MIN_TYPING_MS = 70
	const MAX_TYPING_MS = 110
	const DELETING_MS = 50
	const PAUSED_MS = 1500

	type TypingState = 'typing' | 'deleting' | 'paused'

	const [firstTitle] = titles

	let order = $state(titles)
	let selectedIndex = $state(0)

	// Each pause and play restarts from the whole current title: paused, it reads complete,
	// and played, it starts deleting within a keystroke. The timers below override it as they type
	let cycle = $derived<{typedLength: number; typingState: TypingState}>({
		typedLength: untrack(() => order[selectedIndex].title.length),
		typingState: animating && !hasToggled ? 'paused' : 'deleting',
	})

	// only the tail shuffles: the first title is server-rendered complete, so
	// re-ordering it would yank the typed text out from under the reader
	onMount(() => {
		order = [firstTitle, ...shuffleArray(titles.slice(1))]
	})

	$effect(() => {
		if (!animating) return

		const {typedLength, typingState} = cycle
		const index = selectedIndex
		const current = order[index]

		switch (typingState) {
			case 'typing': {
				const timeout = setTimeout(
					() => {
						cycle = {
							typedLength: typedLength + 1,
							typingState: typedLength + 1 === current.title.length ? 'paused' : 'typing',
						}
					},
					Math.floor(Math.random() * (MAX_TYPING_MS - MIN_TYPING_MS + 1) + MIN_TYPING_MS),
				)
				return () => clearTimeout(timeout)
			}
			case 'deleting': {
				const timeout = setTimeout(() => {
					const nextIndex = order[index + 1] ? index + 1 : 0

					// keep any shared prefix rather than deleting all the way down
					if (
						current.title.slice(0, typedLength) === order[nextIndex].title.slice(0, typedLength)
					) {
						selectedIndex = nextIndex
						cycle = {typedLength, typingState: 'typing'}
						return
					}

					cycle = {typedLength: typedLength - 1, typingState: 'deleting'}
				}, DELETING_MS)
				return () => clearTimeout(timeout)
			}
			case 'paused': {
				const timeout = setTimeout(() => {
					cycle = {typedLength, typingState: 'deleting'}
				}, PAUSED_MS)
				return () => clearTimeout(timeout)
			}
		}
	})

	let current = $derived(order[selectedIndex])
</script>

<!-- a screen reader moving by headings hears one stable name, not a title mid-keystroke -->
<span class="sr-only">{firstTitle.article} {firstTitle.title}</span>
<!-- Every title shares the grid cell invisibly, so the cell holds the widest and tallest and typing moves nothing around it -->
<span
	aria-hidden="true"
	class="headline-wraps:wrap-anywhere headline-wraps:whitespace-normal inline-grid whitespace-nowrap"
>
	{#each titles as { article, title } (title)}
		<span class="invisible col-start-1 row-start-1">{article} <strong>{title}{CURSOR}</strong></span
		>
	{/each}
	<span class="col-start-1 row-start-1">
		{#key selectedIndex}
			{current.article}
			<strong class="text-emphasis"
				>{current.title.slice(0, cycle.typedLength)}{#key cycle.typedLength}<span
						class={['absolute', animating && cycle.typingState === 'paused' && 'animate-blink']}
						>{CURSOR}</span
					>{/key}</strong
			>
		{/key}
	</span>
</span>
