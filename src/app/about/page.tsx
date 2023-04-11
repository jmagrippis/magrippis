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
	<main className="container px-2">
		<h1 className="text-4xl">About</h1>
		<p>This is the about page</p>
	</main>
)

export default About
