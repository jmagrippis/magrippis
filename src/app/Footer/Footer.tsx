import Link from 'next/link'

import YouTubeIcon from '@/icons/youtube.svg'
import GitHubIcon from '@/icons/github.svg'
import DiscordIcon from '@/icons/discord.svg'
import InstagramIcon from '@/icons/instagram.svg'

export const Footer = () => (
	<footer className="mb-2 flex flex-col items-center justify-center gap-2">
		<div className="flex shrink-0 items-center justify-center gap-2">
			Made with 💜 by <strong className="text-emphasis">Johnny</strong>
		</div>

		<div className="flex items-center justify-center gap-2">
			<a
				href="https://www.youtube.com/@johnnifytech"
				target="_blank"
				rel="noopener noreferrer"
			>
				<YouTubeIcon
					title="Johnny's OTHER, newer YouTube channel 👾"
					className="w-6 hover:text-emphasis-hover"
				/>
			</a>
			<a
				href="https://discord.gg/eR5Q52Sfm3"
				target="_blank"
				rel="noopener noreferrer"
			>
				<DiscordIcon
					title="Join Johnny's Discord Community!"
					className="w-7 hover:text-emphasis-hover"
				/>
			</a>
			<a
				href="https://www.instagram.com/jmagrippis"
				target="_blank"
				rel="noopener noreferrer"
			>
				<InstagramIcon
					title="Johnny's Instagram"
					className="w-6 hover:text-emphasis-hover"
				/>
			</a>
			<a
				href="https://github.com/jmagrippis/magrippis"
				target="_blank"
				rel="noopener noreferrer"
			>
				<GitHubIcon
					title="The code for this app, open-source and free on GitHub!"
					className="w-5 hover:text-emphasis-hover"
				/>
			</a>
			<a
				href="https://www.youtube.com/@jmagrippis"
				target="_blank"
				rel="noopener noreferrer"
			>
				<YouTubeIcon
					title="Johnny's fun & informative YouTube channel 😄"
					className="w-6 hover:text-emphasis-hover"
				/>
			</a>
		</div>

		<ul className="mb-2 flex items-center justify-center gap-2">
			<li>
				<Link className="hover:text-emphasis-hover" href="/about">
					blog
				</Link>
			</li>
			<li>
				<Link className="hover:text-emphasis-hover" href="/about">
					about
				</Link>
			</li>
			<li>
				<a
					href="https://johnnify.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Johnnify
				</a>
			</li>
		</ul>
	</footer>
)
