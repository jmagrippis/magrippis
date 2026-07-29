<script lang="ts">
	import Hero from '#lib/components/home/Hero.svelte'
	import Mission from '#lib/components/home/Mission.svelte'
	import OtherWork from '#lib/components/home/OtherWork.svelte'
	import Testimonials from '#lib/components/home/Testimonials.svelte'
	import YouTubeSection from '#lib/components/home/YouTubeSection.svelte'
	import Paragraph from '#lib/components/typography/Paragraph.svelte'
	import {JOHNNIFY_URL} from '#lib/constants'
</script>

<main>
	<Hero />
	<Mission />
	<YouTubeSection />
	<Testimonials />

	<section class="mb-4 flex flex-col gap-4">
		<Paragraph>
			The best way to support me is to watch my videos, tune into my livestreams 🙂
		</Paragraph>
		<Paragraph>
			For the extra mile, leave a comment: some feedback, whether I made you laugh, or helped you
			learn... or what you’d like to see me cover next!
		</Paragraph>
		<Paragraph>
			If you want to exchange monetary support with getting <strong>tremendous value</strong>,
			consider
			<a href={JOHNNIFY_URL} target="_blank" rel="noopener noreferrer">Johnnify Premium</a>! My
			private code, provided as SaaS 🚀
		</Paragraph>
	</section>

	<OtherWork />
</main>
