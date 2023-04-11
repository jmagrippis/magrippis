import './globals.css'
import {Trispace} from 'next/font/google'

import {Header} from './Header/Header'
import {Footer} from './Footer/Footer'

// If loading a variable font, you don't need to specify the font weight
const trispace = Trispace({
	subsets: ['latin'],
	display: 'swap',
})

const metaDescription =
	'Johnny Magrippis is a Fullstack Engineer / Mentor / Photographer / (...) challenging the need to have a niche.'

export const metadata = {
	title: {
		default: 'Johnny Magrippis | jmagrippis',
		template: '%s | jmagrippis',
	},
	description: metaDescription,
	openGraph: {
		title: 'Johnny Magrippis',
		description: metaDescription,
		type: 'website',
		siteName: 'Johnny Magrippis',
	},
}

const RootLayout = ({children}: {children: React.ReactNode}) => {
	return (
		<html lang="en" data-theme="auto" className={trispace.className}>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}

export default RootLayout
