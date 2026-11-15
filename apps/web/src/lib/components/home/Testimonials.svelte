<script lang="ts">
	import type {Picture} from '@sveltejs/enhanced-img'

	import NewTabHint from '#lib/components/NewTabHint.svelte'
	import Subtitle from '#lib/components/typography/Subtitle.svelte'
	import {getYouTubeUrl} from '#lib/getYouTubeUrl.js'

	// width descriptors with `sizes`: as a 2x source, the 88px file would give a 1x screen 44px for its 48px slot
	const avatars = import.meta.glob<Picture>('./avatars/*.{jpeg,jpg}', {
		eager: true,
		query: {enhanced: true, w: '48;88'},
		import: 'default',
	})

	const comments = [
		{
			content:
				'You seem like a really nice person and your videos are super chill. Thank you Johnny, please keep making them if you can!',
			username: 'DisasterSPA',
			avatar: avatars['./avatars/disaster.jpeg'],
			youtubeTitle: 'ChatGPT-4 with SvelteKit 🤖 Generative AI on the EDGE 🌍',
			youtubeId: 'Uw5GZg96kD8',
		},
		{
			content:
				'Great video man... helped me a ton learning vitest. I’m new to vitest scene and couldn’t figure out how to do accessibility unit testing of components...',
			username: 'lopsanggurung5870',
			avatar: avatars['./avatars/lopsang.jpeg'],
			youtubeTitle: '🧪 Test SvelteKit with TDD & VITEST 🧪',
			youtubeId: '5bQD3dCoyHA',
		},
		{
			content: 'Sending support  ❤❤ thank you for the svelte content',
			username: 'BenedictGS',
			avatar: avatars['./avatars/benedict.jpeg'],
			youtubeTitle: '“App-like feel” 😍 with the View Transitions API & SvelteKit!',
			youtubeId: 'qcgGJ0J3yOA',
		},
		{
			content:
				'Working through this halfway through, this is already the best tutorial for coding I have ever worked with! Thank you very much, it must have been a lot of effort.',
			username: 'nazimvenutt',
			avatar: avatars['./avatars/nazim.jpg'],
			youtubeTitle: 'Fullstack SvelteKit Auth 🔐 with Firebase & Magic Links! 🪄',
			youtubeId: 'MAHE4iQgh5Q',
		},
		{
			content: 'You saved my life',
			username: 'joelkomieter6557',
			avatar: avatars['./avatars/joel.jpeg'],
			youtubeTitle: 'Why can’t I get my LOGO in my APP? 😨 How to import SVGs in Next.js',
			youtubeId: '9tJTEGG0t-M',
		},
		{
			content:
				'I loved how you build it first to make it work and then improve from that. Very well explained, reusable code, and excellent background music! Thanks for the video.',
			username: 'user-ht3pk4no5m',
			avatar: avatars['./avatars/user.jpeg'],
			youtubeTitle: 'Code your own TYPING ANIMATION with React ⌨️',
			youtubeId: 'N4899I-tAW4',
		},
		{
			content: '👍🏽love your videos',
			username: 'MikhaelBay',
			avatar: avatars['./avatars/mikhael.jpeg'],
			youtubeTitle:
				'Streams API with SvelteKit: Consuming Streaming Responses 🏞️ 🔴 LIVE Coding & Chill',
			youtubeId: 'zPNufIWxfZM',
		},
		{
			content:
				'I greatly appreciate the humor and personality in your video, much needed during a point of frustration trying to figure out Jest in Next land lol',
			username: 'BrianJackson-zw7jx',
			avatar: avatars['./avatars/brian.jpeg'],
			youtubeTitle: 'How to: Test Next.js with Jest & RTL 🧪🤡',
			youtubeId: '0DK7FX79WI0',
		},
		{
			content:
				'Oh Dear, with the help of your excellent explanation of a not so trivial thing I made it! The first time ever I think that I’ve technically grasped sveltekit’s shadow pages & endpoints.',
			username: 'AxelNitzschner',
			avatar: avatars['./avatars/alex.jpeg'],
			youtubeTitle: '🍞 & 🧈: Magically load data with SvelteKit Endpoints',
			youtubeId: 'f6prqYlbTE4',
		},
	]
</script>

<section class="mb-8 flex flex-col items-center px-2 py-4">
	<Subtitle>Testimonials</Subtitle>

	<ul class="sm:columns-2 lg:columns-3">
		{#each comments as { username, content, avatar, youtubeTitle, youtubeId } (username)}
			<li class="pb-8 last:pb-0 sm:inline-block sm:w-full sm:px-2">
				<figure
					class="bg-surface-inverted text-copy-inverted shadow-mid rounded-2xl p-8 text-base leading-6"
				>
					<blockquote>
						<p>“{content}”</p>
					</blockquote>
					<figcaption class="mt-6 flex items-center gap-x-4">
						<!-- the wrapper is the flex item: a bare `<picture>` would shrink and squash the avatar -->
						<div class="shrink-0">
							<enhanced:img
								src={avatar}
								alt=""
								loading="lazy"
								sizes="48px"
								class="size-12 rounded-full"
							/>
						</div>
						<div class="text-sm">
							<div class="font-semibold">@{username}</div>
							<div>
								<span class="font-light">commenting on </span>
								<!-- the browser's focus ring suits the page, not this inverted card: the card's own text colour holds 3:1 -->
								<a
									href={getYouTubeUrl(youtubeId)}
									target="_blank"
									rel="noopener noreferrer"
									class="hover:text-emphasis-hover focus-visible:outline-3 focus-visible:outline-current"
								>
									{youtubeTitle}<NewTabHint />
								</a>
							</div>
						</div>
					</figcaption>
				</figure>
			</li>
		{/each}
	</ul>
</section>
