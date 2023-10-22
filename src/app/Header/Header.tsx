import Link from 'next/link'

import {ThemeToggle} from './ThemeToggle'
import YouTubeIcon from '@/icons/youtube.svg'
import GitHubIcon from '@/icons/github.svg'
import InstagramIcon from '@/icons/instagram.svg'

export const Header = () => (
	<header className="flex bg-gradient-to-br from-primary-700 to-primary-900">
		<nav className="container flex items-center justify-between px-2 py-4 text-gray-50">
			<Link className="hover:text-emphasis-hover" href="/">
				jmagrippis
			</Link>
			<div className="flex items-center gap-4">
				<Link className="hover:text-emphasis-hover" href="/about">
					about
				</Link>
				<a
					href="https://www.youtube.com/@jmagrippis"
					target="_blank"
					rel="noopener noreferrer"
				>
					<YouTubeIcon
						title="Johnny's fun & informative YouTube channel 😄"
						className="w-8 hover:text-emphasis-hover"
					/>
				</a>
				<a
					href="https://github.com/jmagrippis/magrippis"
					target="_blank"
					rel="noopener noreferrer"
				>
					<GitHubIcon
						title="The code for this app, open-source and free on GitHub!"
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
						className="w-7 hover:text-emphasis-hover"
					/>
				</a>
				<ThemeToggle />
			</div>
		</nav>
	</header>
)
