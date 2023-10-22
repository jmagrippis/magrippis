import './globals.css'
import {cookies} from 'next/headers'
import {Trispace, Noto_Color_Emoji} from 'next/font/google'

import {Header} from './Header/Header'
import {Footer} from './Footer/Footer'

const sansFont = Trispace({
	subsets: ['latin'],
	variable: '--font-sans',
})

const emojiFont = Noto_Color_Emoji({
	subsets: ['emoji'],
	weight: '400',
	variable: '--font-emoji',
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
	const cookieStore = cookies()
	const themeCookie = cookieStore.get('theme')?.value ?? 'auto'

	return (
		<html
			lang="en"
			data-theme={themeCookie}
			className={`${sansFont.variable} ${emojiFont.variable}`}
		>
			<body>
				<Header themeCookie={themeCookie} />
				{children}
				<Footer />
			</body>
		</html>
	)
}

export default RootLayout
