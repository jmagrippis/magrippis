<script lang="ts">
	import {page} from '$app/state'
	import YouTubeIcon from '~icons/brand/youtube'

	import {Button} from '#lib/components/ui/button/index.js'
	import {YOUTUBE_CHANNEL_NAME, YOUTUBE_CHANNEL_URL} from '#lib/constants.js'

	import OutboundLink from './OutboundLink.svelte'
	import ThemeToggle from './ThemeToggle.svelte'

	// on the purple header, emphasis green falls under 3:1 in light theme where near-white holds it in both
	const headerControlClasses = 'text-gray-50 focus-visible:ring-gray-50'
	// unpadded, so the brand lines up with the page content and the row's gap alone spaces the links
	const textLinkClasses = [headerControlClasses, 'px-0 aria-[current]:decoration-dashed']
	// a 32px hit area that takes only its 24px icon's room in the row
	const iconButtonClasses = [headerControlClasses, '-m-1 size-8 hover:text-emphasis-hover']

	const currentFor = (href: string) => {
		const {pathname} = page.url
		if (pathname === href) return 'page'
		if (href !== '/' && pathname.startsWith(`${href}/`)) return 'true'
		return null
	}
</script>

<!-- `pb-3` makes the header 64px at the default text size; larger text grows it -->
<nav class="container flex flex-wrap items-center justify-between gap-y-2 px-2 pt-4 pb-3">
	<div class="text-base sm:text-xl">
		<!-- the Hero owns the page's only h1, so the brand here is just a link home -->
		<Button variant="link" href="/" class={textLinkClasses} aria-current={currentFor('/')}>
			jmagrippis
		</Button>
	</div>

	<div class="flex flex-wrap items-center gap-4">
		<Button variant="link" href="/blog" class={textLinkClasses} aria-current={currentFor('/blog')}>
			blog
		</Button>
		<Button
			variant="link"
			href="/about"
			class={textLinkClasses}
			aria-current={currentFor('/about')}
		>
			about
		</Button>
		<OutboundLink
			href={YOUTUBE_CHANNEL_URL}
			variant="ghost"
			size="icon"
			class={[iconButtonClasses, 'no-underline']}
		>
			<span class="sr-only">{YOUTUBE_CHANNEL_NAME}</span>
			<YouTubeIcon class="size-6" />
		</OutboundLink>
		<ThemeToggle class={iconButtonClasses} />
	</div>
</nav>
