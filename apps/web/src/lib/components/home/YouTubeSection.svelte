<script lang="ts">
	import type {Picture} from '@sveltejs/enhanced-img'

	import Paragraph from '#lib/components/typography/Paragraph.svelte'
	import {NEW_TAB_HINT} from '#lib/constants.js'
	import {getYouTubeUrl} from '#lib/getYouTubeUrl.js'

	const thumbnails = import.meta.glob<Picture>(
		'./images/{google-fonts.png,typing.jpeg,carousel.jpeg}',
		{
			eager: true,
			// width descriptors, so with `sizes` a phone fetches a phone-sized thumbnail rather than the 2x one
			query: {enhanced: true, w: '540;768;1080;1280'},
			import: 'default',
		},
	)

	const videos = [
		{
			id: 'TKKpVlZRFLc',
			title: 'Stop using Google Fonts in prod 📈 what to do instead! 📉',
			img: thumbnails['./images/google-fonts.png'],
		},
		{
			id: 'N4899I-tAW4',
			title: 'Code your own TYPING ANIMATION with React ⌨️',
			img: thumbnails['./images/typing.jpeg'],
		},
		{
			id: 'YqSLxkFuQp0',
			title: '🧲 Magnetic Carousel with Tailwind 3 & Svelte 🎠',
			img: thumbnails['./images/carousel.jpeg'],
		},
	]
</script>

<section>
	<Paragraph>
		I strive to get more brilliant minds into engineering, and one of my most impactful avenues are <strong
			>my YouTube videos</strong
		>!
	</Paragraph>

	<ul class="grid gap-6 py-8 sm:grid-cols-3 lg:gap-6 2xl:gap-8">
		{#each videos as { id, img, title }, i (id)}
			<li>
				<a
					href={getYouTubeUrl(id)}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={`${title}${NEW_TAB_HINT}`}
				>
					<enhanced:img
						src={img}
						alt=""
						{title}
						sizes="(min-width: 640px) 33vw, 100vw"
						fetchpriority={i === 0 ? 'high' : 'auto'}
						loading={i === 0 ? 'eager' : 'lazy'}
						class="sm:rounded-lg"
					/>
				</a>
			</li>
		{/each}
	</ul>

	<Paragraph>
		<strong>SvelteKit</strong> and <strong>Next.js</strong> are my specialties, but I cover all
		sorts of languages, principles & techniques. Anything I strongly feel will help
		<strong>you</strong> succeed in tech and rocket-boost your career! 🚀
	</Paragraph>
</section>
