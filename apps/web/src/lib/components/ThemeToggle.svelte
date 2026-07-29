<script lang="ts">
	import {setMode, setTheme, theme} from 'mode-watcher'

	import {Button} from '#lib/components/ui/button'

	import ThemeToggleIcon from './ThemeToggleIcon.svelte'

	const toggleTheme = () => {
		const nextTheme = theme.current === 'dark' ? 'light' : 'dark'

		setTheme(nextTheme)
		setMode(nextTheme)
	}
</script>

<Button
	variant="ghost"
	size="icon"
	class="hover:text-emphasis-hover text-gray-50 hover:bg-transparent"
	onclick={toggleTheme}
	aria-label="toggle light/dark theme"
>
	<ThemeToggleIcon class="size-8" />
</Button>
