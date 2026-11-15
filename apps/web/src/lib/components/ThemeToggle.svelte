<script lang="ts">
	import {setMode, setTheme, theme} from 'mode-watcher'
	import type {ClassValue} from 'svelte/elements'

	import {Button} from '#lib/components/ui/button/index.js'

	import ThemeToggleIcon from './ThemeToggleIcon.svelte'

	type Props = {
		class?: ClassValue
	}
	let {class: className}: Props = $props()

	const toggleTheme = () => {
		const nextTheme = theme.current === 'dark' ? 'light' : 'dark'

		setTheme(nextTheme)
		setMode(nextTheme)
	}
</script>

<Button
	variant="ghost"
	size="icon"
	class={className}
	onclick={toggleTheme}
	aria-label="toggle light/dark theme"
>
	<ThemeToggleIcon class="size-6" />
</Button>
