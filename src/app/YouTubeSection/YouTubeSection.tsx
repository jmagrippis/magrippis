import Image from 'next/image'

import googleFonts from './google-fonts.png'
import typing from './typing.jpeg'
import carousel from './carousel.jpeg'
import {getYouTubeUrl} from '@/lib/getYouTubeUrl'
import {Paragraph} from '../Paragraph'

const videos = [
	{
		id: 'TKKpVlZRFLc',
		title: 'Stop using Google Fonts in prod 📈 what to do instead! 📉',
		imgSrc: googleFonts,
	},
	{
		id: 'N4899I-tAW4',
		title: 'Code your own TYPING ANIMATION with React ⌨️',
		imgSrc: typing,
	},
	{
		id: 'YqSLxkFuQp0',
		title: '🧲 Magnetic Carousel with Tailwind 3 & Svelte 🎠',
		imgSrc: carousel,
	},
]

export const YouTubeSection = () => (
	<section>
		<Paragraph>
			I strive to get more brilliant minds into engineering, and one of my most
			impactful avenues are <strong>my YouTube videos</strong>!
		</Paragraph>
		<ul className="grid gap-6 py-8 sm:grid-cols-3 lg:gap-6 2xl:gap-8">
			{videos.map(({id, imgSrc, title}, i) => (
				<li key={id}>
					<a href={getYouTubeUrl(id)}>
						<Image
							src={imgSrc}
							alt={title}
							title={title}
							priority={i === 0}
							placeholder="blur"
							className="sm:rounded-lg"
						/>
					</a>
				</li>
			))}
		</ul>
		<Paragraph>
			<strong>SvelteKit</strong> and <strong>Next.js</strong> are my
			specialties, but I cover all sorts of languages, principles & techniques.
			Anything I strongly feel will help <strong>you</strong> succeed in tech
			and rocket-boost your career! 🚀
		</Paragraph>
	</section>
)
