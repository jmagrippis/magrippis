import Link from 'next/link'

export const Header = () => (
	<header className="bg-gray-900">
		<nav className="container flex justify-between px-2 py-4 text-gray-50">
			<Link className="hover:text-emphasis-hover" href="/">
				jmagrippis
			</Link>
			<Link className="hover:text-emphasis-hover" href="/about">
				about
			</Link>
		</nav>
	</header>
)
