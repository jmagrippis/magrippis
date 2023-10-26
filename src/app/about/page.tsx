import Link from 'next/link'

import {proseClasses} from '@/lib/sharedClasses'
import {PageTitle} from '../PageTitle'

export const metadata = {
	title: 'About',
	description: 'Learn more about Johnny and this website in particular!',
}

const About = () => (
	<main className={`container ${proseClasses}`}>
		<PageTitle>About</PageTitle>
		<section className="gap-2 px-2">
			<p>Hello and welcome!</p>
			<p>
				If you want to know more <strong>about me</strong>, you’re better served
				by <Link href="/">the homepage</Link>.
			</p>
			<p>
				If you want to know more about this website specifically, well, you’re
				in the right place!
			</p>

			<h2>The Purpose</h2>
			<p>
				This site counts as a “blogfolio”, a showcase of what I can do for work,
				but also of what I do for fun and non-profit 😄
			</p>
			<p>
				It should entice people{' '}
				<a
					href="https://www.youtube.com/watch?v=TKKpVlZRFLc"
					target="_blank"
					rel="noopener noreferrer"
				>
					to watch my videos
				</a>
				, instill confidence I can walk the walk besides talking the talk. It
				should encourage you to reach out for a collaboration or mentoring!
			</p>
			<p>
				It’s not supposed to be overly serious, but it does contain a couple
				technical posts people keeping linking back to. And it{' '}
				<strong>is</strong>, itself, a seriously-made, modern, web app,
				optimised for a fun and fruitful user experience.
			</p>
			<p>
				The common consensus is against creating your own portfolio website to
				fill out your CV. But there’s nothing against creating one when you{' '}
				<strong>do</strong> have a decent CV!
			</p>
			<p>
				Besides, larger projects are truly collaborative, and I don’t stick
				around companies for too long. So, it’d be quite silly of me to say “if
				you want to see a Next.js app I worked on, check out{' '}
				<a
					href="https://www.zoopla.co.uk/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Zoopla
				</a>
				!”
			</p>
			<p>
				It’s technically correct, the best kind of correct, but with this
				website, it’s clear that: if it’s got a feature, I’ve personally worked
				to implement it, solo 🙌 If it’s unique enough, I may even have a
				tutorial about it!
			</p>
			<p>
				Plus, much like “real” projects, I don’t quite have a carte-blanche to
				do <strong>anything</strong> I want here: There’s awkward requirements!
				I don’t blog often, but some of my posts have gone relatively viral.
				Therefore, I should ensure noone’s left with broken links! Which means
				how I structure my routes needs to stay consistent, <strong>and</strong>{' '}
				I need to keep my MDX support!
			</p>
			<p>
				<a
					href="https://plausible.io/magrippis.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					My analytics are public
				</a>{' '}
				so you can see we’re not Zoopla by a longshot, but there{' '}
				<strong>is</strong> a decent amount of people dropping by 👋
			</p>

			<h2>The Stack</h2>
			<p>
				The code is open-source and free{' '}
				<a
					href="https://github.com/jmagrippis/magrippis"
					target="_blank"
					rel="noopener noreferrer"
				>
					on GitHub
				</a>
				, you’re welcome to peruse it! It’s got details on the specific stack I
				went with to make this site tick.
			</p>
			<p>
				I always keep my unpaid projects open-source and free, and have even
				done so for some of my paid work! And I always advise{' '}
				<strong>for being inspired</strong> by my methods, but{' '}
				<strong>against blindly copying everything</strong> wholesale.
			</p>
			<p>
				That’s because I think that’s neither the best way to learn, nor likely
				to impress anyone looking at your portfolio / CV. The interviewers will
				know 😛 If you copy everything regardless, as people have done in the
				past... fair enough! That’s one of the points of open-source 😄
			</p>

			<h2>Next.js vs SvelteKit</h2>
			<p>
				Given I’ve amassed quite a few SvelteKit tutorials by now, you may be
				wondering... Why is this site Next.js?!
			</p>
			<p>
				Next.js & SvelteKit are my two meta frameworks of choice at the moment.
				I most often use SvelteKit in my video tutorials, as I find Svelte
				closer to vanilla HTML, CSS & Javascript. This means it’s easier to
				showcase fundamentals with it.
			</p>
			<p>
				I most often use Next.js for paid work, as it’s got the unfair advantage
				of... <strong>React</strong> 😂.
			</p>
			<p>
				I may be experiencing a bit of “React Fatigue”, but the bigger companies
				I work with <strong>love</strong> targeting the much larger pool of
				React engineers. Plus, React got mega-popular way before Svelte even
				existed, so we’re at the point where there’s legacy codebases in React!
				It’s way more likely for a bigger company to have React apps they’d want
				my consultancy on, than Svelte apps.
			</p>
			<p>
				In any case, the point is: I should have at least two core personal
				projects I update regularly, one for each of my favoured meta
				frameworks! Lo and behold,{' '}
				<a
					href="https://johnnify.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Johnnify is SvelteKit
				</a>{' '}
				and this app is Next.js!
			</p>
			<p>
				The tech world moves fast, especially the Javascript scene... I think my
				livestreams, and my core projects with real users & requirements have
				helped me stay current!
			</p>
			<p>
				After all, it’s not everyday you get a greenfield contract, and even
				then there’s always a “novelty budget”: it’s a bad idea to cram
				everything that’s new since your last project!
			</p>

			<h2>Reaching out</h2>
			<p>
				There is one more secret weapon helping me stay current:{' '}
				<strong>you</strong> 🤗
			</p>
			<p>
				I still read & reply to every single YouTube comment. They are a great
				resource for validation that I’m at least helping someone or leading
				some discussion, but also a fountain of suggestions and ideas!
			</p>
			<p>
				So, please, feel free to comment on any video that strikes your fancy,
				or reach out through the socials in the footer. Some have a higher
				likelihood of a faster reply than others 😅
			</p>
			<p>And, of course: thanks a bunch for reading! 🤙</p>
		</section>
	</main>
)

export default About
