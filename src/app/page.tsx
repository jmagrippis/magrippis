import Hero from './Hero/Hero'
import {Mission} from './Mission/Mission'
import {YouTubeSection} from './YouTubeSection/YouTubeSection'
import {Testimonials} from './Testimonials/Testimonials'
import {Paragraph} from './Paragraph'
import {OtherWork} from './OtherWork/OtherWork'

const Home = () => (
	<main>
		<Hero />
		<Mission />
		<YouTubeSection />
		<Testimonials />
		<section className="mb-4 flex flex-col gap-4">
			<Paragraph>
				The best way to support me is to watch my videos, tune into my
				livestreams 🙂
			</Paragraph>
			<Paragraph>
				For the extra mile, leave a comment: some feedback, whether I made you
				laugh, or helped you learn... or what you’d like to see me cover next!
			</Paragraph>
			<Paragraph>
				If you want to exchange monetary support with getting{' '}
				<strong>tremendous value</strong>, consider{' '}
				<a
					href="https://johnnify.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Johnnify Premium
				</a>
				! My private code, provided as SaaS 🚀
			</Paragraph>
		</section>
		<OtherWork />
	</main>
)

export default Home
