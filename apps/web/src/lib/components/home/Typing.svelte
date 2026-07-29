<script lang="ts">
	import {onMount} from 'svelte'

	import {shuffleArray} from '#lib/shuffleArray'

	import {titles} from './titles'

	const MIN_TYPING_MS = 70
	const MAX_TYPING_MS = 110
	const DELETING_MS = 50
	const PAUSED_MS = 1500

	type TypingState = 'typing' | 'deleting' | 'paused'

	let order = $state(titles)
	let selectedIndex = $state(0)
	let typedLength = $state(titles[0].title.length)
	let typingState = $state<TypingState>('paused')

	// only the tail shuffles: the first title is server-rendered complete, so
	// re-ordering it would yank the typed text out from under the reader
	onMount(() => {
		order = [titles[0], ...shuffleArray(titles.slice(1))]
	})

	$effect(() => {
		const state = typingState
		const index = selectedIndex
		const length = typedLength
		const current = order[index]

		switch (state) {
			case 'typing': {
				const timeout = setTimeout(
					() => {
						typedLength = length + 1
						if (length + 1 === current.title.length) {
							typingState = 'paused'
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
					if (current.title.slice(0, length) === order[nextIndex].title.slice(0, length)) {
						selectedIndex = nextIndex
						typingState = 'typing'
						return
					}

					typedLength = length - 1
				}, DELETING_MS)
				return () => clearTimeout(timeout)
			}
			case 'paused': {
				const timeout = setTimeout(() => {
					typingState = 'deleting'
				}, PAUSED_MS)
				return () => clearTimeout(timeout)
			}
		}
	})

	let current = $derived(order[selectedIndex])
</script>

{current.article}
<strong
	class={['text-emphasis after:content-["|"]', typingState === 'paused' && 'after:animate-blink']}
>
	{current.title.slice(0, typedLength)}
</strong>
