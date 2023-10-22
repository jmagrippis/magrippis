import {PageTitle} from '../PageTitle'

const metaDescription =
	'Learn more about Johnny and this website in particular!'

export const metadata = {
	title: 'About',
	description: metaDescription,
	openGraph: {
		title: 'About | Johnny Magrippis',
		description: metaDescription,
		type: 'website',
		siteName: 'Johnny Magrippis',
	},
}

const About = () => (
	<main className="container px-2 pt-10">
		<PageTitle>About</PageTitle>
		<p>This is the about page</p>
	</main>
)

export default About
