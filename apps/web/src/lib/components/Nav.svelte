<script lang="ts">
	import {page} from '$app/state'
	import YouTubeIcon from '~icons/brand/youtube'

	import {Button} from '#lib/components/ui/button'
	import {YOUTUBE_CHANNEL_URL} from '#lib/constants'

	import ThemeToggle from './ThemeToggle.svelte'

	const linkClasses = 'text-gray-50 hover:text-emphasis-hover hover:bg-transparent'
	const activeClasses = 'underline decoration-dashed'

	// the Hero owns the page's only h1, so the brand here is just a link home
	let isHome = $derived(page.url.pathname === '/')
</script>

<nav class="container flex items-center justify-between px-2 py-4">
	<div class="text-xl">
		<Button variant="link" href="/" class={[linkClasses, isHome && activeClasses]}>
			jmagrippis
		</Button>
	</div>

	<div class="flex items-center gap-1 sm:gap-2">
		<Button
			variant="link"
			href="/blog"
			class={[linkClasses, page.url.pathname.startsWith('/blog') && activeClasses]}
		>
			blog
		</Button>
		<Button
			variant="link"
			href="/about"
			class={[linkClasses, page.url.pathname === '/about' && activeClasses]}
		>
			about
		</Button>
		<Button
			variant="ghost"
			size="icon"
			href={YOUTUBE_CHANNEL_URL}
			target="_blank"
			rel="noopener noreferrer"
			class="{linkClasses} no-underline"
		>
			<span class="sr-only">Johnny’s fun & informative YouTube channel 😄</span>
			<YouTubeIcon class="size-8" />
		</Button>
		<ThemeToggle />
	</div>
</nav>
