<script lang="ts">
	import DiscordIcon from '~icons/brand/discord'
	import GitHubIcon from '~icons/brand/github'
	import InstagramIcon from '~icons/brand/instagram'
	import TikTokIcon from '~icons/brand/tikTok'
	import YouTubeIcon from '~icons/brand/youtube'

	import {Button} from '#lib/components/ui/button/index.js'
	import {
		DISCORD_URL,
		GITHUB_REPO_URL,
		INSTAGRAM_URL,
		JOHNNIFY_URL,
		TIKTOK_URL,
		YOUTUBE_CHANNEL_NAME,
		YOUTUBE_CHANNEL_URL,
	} from '#lib/constants.js'

	import OutboundLink from './OutboundLink.svelte'

	const socials = [
		{
			href: YOUTUBE_CHANNEL_URL,
			label: YOUTUBE_CHANNEL_NAME,
			icon: YouTubeIcon,
			class: 'size-6',
		},
		{
			href: DISCORD_URL,
			label: 'Join Johnny’s Discord Community!',
			icon: DiscordIcon,
			class: 'size-7',
		},
		{
			href: INSTAGRAM_URL,
			label: 'Johnny’s Instagram',
			icon: InstagramIcon,
			class: 'size-6',
		},
		{
			href: TIKTOK_URL,
			label: 'Johnny’s TikTok account',
			icon: TikTokIcon,
			class: 'size-6',
		},
		{
			href: GITHUB_REPO_URL,
			label: 'The code for this app, open-source and free on GitHub!',
			icon: GitHubIcon,
			class: 'size-5',
		},
	]
</script>

<footer class="mb-2 flex flex-col items-center justify-center gap-2">
	<div class="flex shrink-0 items-center justify-center gap-2">
		Made with 💜 by <strong class="text-emphasis">Johnny</strong>
	</div>

	<div class="flex items-center justify-center gap-2">
		{#each socials as { href, label, icon: Icon, class: iconClass } (href)}
			<OutboundLink {href} variant="ghost" size="icon" class="no-underline">
				<span class="sr-only">{label}</span>
				<Icon class={iconClass} />
			</OutboundLink>
		{/each}
	</div>

	<ul class="mb-2 flex items-center justify-center gap-2">
		<li>
			<Button variant="link" size="inline" class="hover:text-emphasis-hover" href="/blog">
				blog
			</Button>
		</li>
		<li>
			<Button variant="link" size="inline" class="hover:text-emphasis-hover" href="/about">
				about
			</Button>
		</li>
		<li>
			<OutboundLink size="inline" href={JOHNNIFY_URL}>Johnnify</OutboundLink>
		</li>
	</ul>
</footer>
