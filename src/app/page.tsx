import Image from 'next/image'
import livestreamCover from './streaming.jpg'

import Hero from './Hero/Hero'

const Home = () => (
	<main>
		<Hero />
		<section className="container">
			<p className="px-2">Watch videos & streams!</p>
			<Image
				src={livestreamCover}
				alt="Johnny livestreaming!"
				placeholder="blur"
				className="shadow-low sm:rounded-lg sm:px-2"
			/>
		</section>
	</main>
)

export default Home
