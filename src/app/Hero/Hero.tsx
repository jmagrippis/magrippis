import Image from 'next/image'

import avatar from './hero.jpg'
import Typing from './Typing'
import {titles} from './titles'

const shuffleArray = (array: any[]) => {
	const shuffledArray = [...array]
	let currentIndex = shuffledArray.length,
		randomIndex

	// While there remain elements to shuffle.
	while (currentIndex != 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex--

		// And swap it with the current element.
		;[shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
			shuffledArray[randomIndex],
			shuffledArray[currentIndex],
		]
	}

	return shuffledArray
}

const Hero = () => (
	<section className="container mb-4 grid grid-cols-12 items-center gap-4 px-2 py-4 lg:gap-8">
		<Image
			src={avatar}
			alt="Johnny’s avatar"
			priority
			placeholder="blur"
			className="col-span-3 rounded-full shadow-mid lg:col-span-2"
		/>
		<h1 className="col-span-9 text-2xl lg:col-span-10 lg:text-4xl">
			Hello, I’m <strong>Johnny</strong> and I’m...{' '}
			<Typing titles={shuffleArray(titles)} />
		</h1>
	</section>
)

export default Hero
