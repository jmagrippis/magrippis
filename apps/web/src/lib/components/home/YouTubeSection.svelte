<script lang="ts">
	import Paragraph from '#lib/components/typography/Paragraph.svelte'
	import {getYouTubeUrl} from '#lib/getYouTubeUrl'

	import carousel from './images/carousel.jpeg?enhanced'
	import googleFonts from './images/google-fonts.png?enhanced'
	import typing from './images/typing.jpeg?enhanced'

	const videos = [
		{
			id: 'TKKpVlZRFLc',
			title: 'Stop using Google Fonts in prod 📈 what to do instead! 📉',
			img: googleFonts,
		},
		{
			id: 'N4899I-tAW4',
			title: 'Code your own TYPING ANIMATION with React ⌨️',
			img: typing,
		},
		{
			id: 'YqSLxkFuQp0',
			title: '🧲 Magnetic Carousel with Tailwind 3 & Svelte 🎠',
			img: carousel,
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
				<a href={getYouTubeUrl(id)} target="_blank" rel="noopener noreferrer" aria-label={title}>
					<enhanced:img
						src={img}
						alt=""
						{title}
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
