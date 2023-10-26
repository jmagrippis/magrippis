'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import cn from 'classnames'

import {ThemeToggle} from './ThemeToggle'
import YouTubeIcon from '@/icons/youtube.svg'

const activeClasses = 'decoration-dashed'

export const Nav = () => {
	const pathname = usePathname()

	const HomeElement = pathname === '/' ? 'h1' : 'span'

	return (
		<nav className="container flex items-center justify-between px-2 py-4 text-gray-50">
			<HomeElement>
				<Link
					className={cn('hover:text-emphasis-hover', {
						[activeClasses]: pathname === '/',
					})}
					href="/"
				>
					jmagrippis
				</Link>
			</HomeElement>
			<div className="flex items-center gap-4">
				<Link
					className={cn('hover:text-emphasis-hover', {
						[activeClasses]: pathname.startsWith('/blog'),
					})}
					href="/blog"
				>
					blog
				</Link>
				<Link
					className={cn('hover:text-emphasis-hover', {
						[activeClasses]: pathname === '/about',
					})}
					href="/about"
				>
					about
				</Link>
				<a
					href="https://www.youtube.com/@jmagrippis?sub_confirmation=1"
					target="_blank"
					rel="noopener noreferrer"
				>
					<YouTubeIcon
						title="Johnny's fun & informative YouTube channel 😄"
						className="w-8 hover:text-emphasis-hover"
					/>
				</a>
				<ThemeToggle />
			</div>
		</nav>
	)
}
