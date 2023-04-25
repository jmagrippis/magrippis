import Link from 'next/link'
import {ThemeToggle} from './ThemeToggle'

type Props = {themeCookie: string}

export const Header = ({themeCookie}: Props) => (
	<header className="flex bg-gray-900">
		<nav className="container flex items-center justify-between px-2 py-4 text-gray-50">
			<Link className="hover:text-emphasis-hover" href="/">
				jmagrippis
			</Link>
			<div className="flex items-center gap-4">
				<Link className="hover:text-emphasis-hover" href="/about">
					about
				</Link>
				<ThemeToggle themeCookie={themeCookie} />
			</div>
		</nav>
	</header>
)
