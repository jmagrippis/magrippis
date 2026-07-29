<script lang="ts">
	import Subtitle from '#lib/components/typography/Subtitle.svelte'
	import {getYouTubeUrl} from '#lib/getYouTubeUrl'

	import alexAvatar from './avatars/alex.jpeg?enhanced'
	import benedictAvatar from './avatars/benedict.jpeg?enhanced'
	import brianAvatar from './avatars/brian.jpeg?enhanced'
	import disasterAvatar from './avatars/disaster.jpeg?enhanced'
	import joelAvatar from './avatars/joel.jpeg?enhanced'
	import lopsangAvatar from './avatars/lopsang.jpeg?enhanced'
	import mikhaelAvatar from './avatars/mikhael.jpeg?enhanced'
	import nazimAvatar from './avatars/nazim.jpg?enhanced'
	import userAvatar from './avatars/user.jpeg?enhanced'

	const comments = [
		{
			content:
				'You seem like a really nice person and your videos are super chill. Thank you Johnny, please keep making them if you can!',
			username: 'DisasterSPA',
			avatar: disasterAvatar,
			youtubeTitle: 'ChatGPT-4 with SvelteKit 🤖 Generative AI on the EDGE 🌍',
			youtubeId: 'Uw5GZg96kD8',
		},
		{
			content:
				'Great video man... helped me a ton learning vitest. I’m new to vitest scene and couldn’t figure out how to do accessibility unit testing of components...',
			username: 'lopsanggurung5870',
			avatar: lopsangAvatar,
			youtubeTitle: '🧪 Test SvelteKit with TDD & VITEST 🧪',
			youtubeId: '5bQD3dCoyHA',
		},
		{
			content: 'Sending support  ❤❤ thank you for the svelte content',
			username: 'BenedictGS',
			avatar: benedictAvatar,
			youtubeTitle: '“App-like feel” 😍 with the View Transitions API & SvelteKit!',
			youtubeId: 'qcgGJ0J3yOA',
		},
		{
			content:
				'Working through this halfway through, this is already the best tutorial for coding I have ever worked with! Thank you very much, it must have been a lot of effort.',
			username: 'nazimvenutt',
			avatar: nazimAvatar,
			youtubeTitle: 'Fullstack SvelteKit Auth 🔐 with Firebase & Magic Links! 🪄',
			youtubeId: 'MAHE4iQgh5Q',
		},
		{
			content: 'You saved my life',
			username: 'joelkomieter6557',
			avatar: joelAvatar,
			youtubeTitle: 'Why can’t I get my LOGO in my APP? 😨 How to import SVGs in Next.js',
			youtubeId: '9tJTEGG0t-M',
		},
		{
			content:
				'I loved how you build it first to make it work and then improve from that. Very well explained, reusable code, and excellent background music! Thanks for the video.',
			username: 'user-ht3pk4no5m',
			avatar: userAvatar,
			youtubeTitle: 'Code your own TYPING ANIMATION with React ⌨️',
			youtubeId: 'N4899I-tAW4',
		},
		{
			content: '👍🏽love your videos',
			username: 'MikhaelBay',
			avatar: mikhaelAvatar,
			youtubeTitle:
				'Streams API with SvelteKit: Consuming Streaming Responses 🏞️ 🔴 LIVE Coding & Chill',
			youtubeId: 'zPNufIWxfZM',
		},
		{
			content:
				'I greatly appreciate the humor and personality in your video, much needed during a point of frustration trying to figure out Jest in Next land lol',
			username: 'BrianJackson-zw7jx',
			avatar: brianAvatar,
			youtubeTitle: 'How to: Test Next.js with Jest & RTL 🧪🤡',
			youtubeId: '0DK7FX79WI0',
		},
		{
			content:
				'Oh Dear, with the help of your excellent explanation of a not so trivial thing I made it! The first time ever I think that I’ve technically grasped sveltekit’s shadow pages & endpoints.',
			username: 'AxelNitzschner',
			avatar: alexAvatar,
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
						<enhanced:img src={avatar} alt="" loading="lazy" class="size-12 rounded-full" />
						<div class="text-sm">
							<div class="font-semibold">@{username}</div>
							<div>
								<span class="font-light">commenting on </span>
								<a
									href={getYouTubeUrl(youtubeId)}
									target="_blank"
									rel="noopener noreferrer"
									class="hover:text-emphasis-hover"
								>
									{youtubeTitle}
								</a>
							</div>
						</div>
					</figcaption>
				</figure>
			</li>
		{/each}
	</ul>
</section>
