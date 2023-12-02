import Image from 'next/image'

import {getYouTubeUrl} from '@/lib/getYouTubeUrl'
import disasterAvatar from './avatars/disaster.jpeg'
import lopsangAvatar from './avatars/lopsang.jpeg'
import benedictAvatar from './avatars/benedict.jpeg'
import nazimAvatar from './avatars/nazim.jpg'
import joelAvatar from './avatars/joel.jpeg'
import userAvatar from './avatars/user.jpeg'
import mikhaelAvatar from './avatars/mikhael.jpeg'
import brianAvatar from './avatars/brian.jpeg'
import alexAvatar from './avatars/alex.jpeg'
import {Subtitle} from '../Subtitle'

const comments = [
	{
		content:
			'You seem like a really nice person and your videos are super chill. Thank you Johnny, please keep making them if you can!',
		username: 'DisasterSPA',
		avatarSrc: disasterAvatar,
		youtubeTitle: 'ChatGPT-4 with SvelteKit 🤖 Generative AI on the EDGE 🌍',
		youtubeId: 'Uw5GZg96kD8',
	},
	{
		content:
			'Great video man... helped me a ton learning vitest. I’m new to vitest scene and couldn’t figure out how to do accessibility unit testing of components...',
		username: 'lopsanggurung5870',
		avatarSrc: lopsangAvatar,
		youtubeTitle: '🧪 Test SvelteKit with TDD & VITEST 🧪',
		youtubeId: '5bQD3dCoyHA',
	},
	{
		content: 'Sending support  ❤❤ thank you for the svelte content',
		username: 'BenedictGS',
		avatarSrc: benedictAvatar,
		youtubeTitle:
			'“App-like feel” 😍 with the View Transitions API & SvelteKit!',
		youtubeId: 'qcgGJ0J3yOA',
	},
	{
		content:
			'Working through this halfway through, this is already the best tutorial for coding I have ever worked with! Thank you very much, it must have been a lot of effort.',
		username: 'nazimvenutt',
		avatarSrc: nazimAvatar,
		youtubeTitle: 'Fullstack SvelteKit Auth 🔐 with Firebase & Magic Links! 🪄',
		youtubeId: 'MAHE4iQgh5Q',
	},
	{
		content: 'You saved my life',
		username: 'joelkomieter6557',
		avatarSrc: joelAvatar,
		youtubeTitle:
			'Why can’t I get my LOGO in my APP? 😨 How to import SVGs in Next.js',
		youtubeId: '9tJTEGG0t-M',
	},
	{
		content:
			'I loved how you build it first to make it work and then improve from that. Very well explained, reusable code, and excellent background music! Thanks for the video.',
		username: 'user-ht3pk4no5m',
		avatarSrc: userAvatar,
		youtubeTitle: 'Code your own TYPING ANIMATION with React ⌨️',
		youtubeId: 'N4899I-tAW4',
	},
	{
		content: '👍🏽love your videos',
		username: 'MikhaelBay',
		avatarSrc: mikhaelAvatar,
		youtubeTitle:
			'Streams API with SvelteKit: Consuming Streaming Responses 🏞️ 🔴 LIVE Coding & Chill',
		youtubeId: 'zPNufIWxfZM',
	},
	{
		content:
			'I greatly appreciate the humor and personality in your video, much needed during a point of frustration trying to figure out Jest in Next land lol',
		username: 'BrianJackson-zw7jx',
		avatarSrc: brianAvatar,
		youtubeTitle: 'How to: Test Next.js with Jest & RTL 🧪🤡',
		youtubeId: '0DK7FX79WI0',
	},
	{
		content:
			'Oh Dear, with the help of your excellent explanation of a not so trivial thing I made it! The first time ever I think that I’ve technically grasped sveltekit’s shadow pages & endpoints.',
		username: 'AxelNitzschner',
		avatarSrc: alexAvatar,
		youtubeTitle: '🍞 & 🧈: Magically load data with SvelteKit Endpoints',
		youtubeId: 'f6prqYlbTE4',
	},
]

export const Testimonials = () => (
	<section className="mb-8 flex flex-col items-center px-2 py-4">
		<Subtitle>Testimonials</Subtitle>
		<ul className="sm:columns-2 lg:columns-3">
			{comments.map(
				({username, content, avatarSrc, youtubeTitle, youtubeId}) => (
					<li
						className="pb-8 last:pb-0 sm:inline-block sm:w-full sm:px-2"
						key={username}
					>
						<figure className="rounded-2xl bg-surface-inverted  p-8 text-base leading-6 text-copy-inverted shadow-mid">
							<blockquote>
								<p>“{content}”</p>
							</blockquote>
							<figcaption className="mt-6 flex items-center gap-x-4">
								<Image
									src={avatarSrc}
									className="h-12 w-12 rounded-full"
									alt="avatar"
								/>
								<div className="text-sm">
									<div className="font-semibold">@{username}</div>
									<div>
										<span className="font-light">commenting on </span>
										<a
											href={getYouTubeUrl(youtubeId)}
											target="_blank"
											rel="noopener noreferrer"
											className="hover:text-emphasis-hover"
										>
											{youtubeTitle}
										</a>
									</div>
								</div>
							</figcaption>
						</figure>
					</li>
				),
			)}
		</ul>
	</section>
)
