<script lang="ts">
	import {onMount} from 'svelte'
	import {prefersReducedMotion} from 'svelte/motion'

	import {Button} from '#lib/components/ui/button/index.js'

	import PlayPauseIcon from './PlayPauseIcon.svelte'
	import Typing from './Typing.svelte'

	// the toggle only shows once it works, in a slot laid out from the first paint
	let hydrated = $state(false)
	let animating = $state(false)
	let hasToggled = $state(false)

	onMount(() => {
		hydrated = true
		animating = !prefersReducedMotion.current
	})

	const toggleAnimation = () => {
		hasToggled = true
		animating = !animating
	}
</script>

<section
	class="@container container mt-4 mb-8 grid items-center gap-4 px-2 py-4 sm:h-48 sm:grid-cols-12 lg:mt-12 lg:mb-16 lg:h-60 lg:gap-8"
>
	<!-- span goes on the wrapper: `enhanced:img` puts its class on the inner `<img>` -->
	<div class="w-22 sm:col-span-3 sm:w-auto lg:col-span-2">
		<enhanced:img
			src="./images/hero.jpg?w=128;192;256;384;512"
			alt="Johnny’s avatar"
			sizes="(min-width: 1536px) 227px, (min-width: 1280px) 184px, (min-width: 1024px) 141px, (min-width: 768px) 176px, (min-width: 640px) 144px, 88px"
			fetchpriority="high"
			class="shadow-mid w-full rounded-full"
		/>
	</div>
	<div class="text-headline text-balance sm:col-span-9 sm:text-2xl lg:col-span-10 lg:text-4xl">
		<h1 class="inline">
			Hello, I’m <strong>Johnny</strong> and I’m <Typing {animating} {hasToggled} />
		</h1>
		<Button
			variant="ghost"
			size="icon"
			class={['size-8 align-middle sm:size-9', !hydrated && 'invisible']}
			aria-label={animating ? 'Pause typing animation' : 'Play typing animation'}
			onclick={toggleAnimation}
		>
			<PlayPauseIcon paused={!animating} {hasToggled} class="size-8" />
		</Button>
	</div>
</section>
