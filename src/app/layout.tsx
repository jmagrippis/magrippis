import './globals.css'
import {Trispace} from 'next/font/google'
import type {Viewport} from 'next'

import {Header} from './Header/Header'
import {Footer} from './Footer/Footer'
import Script from 'next/script'

const sansFont = Trispace({
	subsets: ['latin'],
	variable: '--font-sans',
})

const metaDescription =
	'Johnny Magrippis is a Principal Fullstack Engineer / Creator / Mentor AND MORE, who loves learning... especially via teaching other people about Fullstack Development, meaningful automated tests, Svelte & SvelteKit, React & Next.js.'

export const metadata = {
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_ROOT_URL
			? `https://${process.env.NEXT_PUBLIC_ROOT_URL}`
			: `http://localhost:${process.env.PORT || 3000}`,
	),
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

export const viewport: Viewport = {
	themeColor: '#9333ea',
}

const RootLayout = ({children}: {children: React.ReactNode}) => (
	<html
		lang="en"
		className={sansFont.variable}
		// data-theme will appear on the client
		suppressHydrationWarning
	>
		<head>
			{/* eslint-disable @next/next/no-sync-scripts */}
			<script src="/theme-toggle.js" />
		</head>
		<body>
			<Script
				defer
				data-domain="magrippis.com"
				src="https://plausible.io/js/script.js"
			/>
			<Header />
			{children}
			<Footer />
		</body>
	</html>
)

export default RootLayout
