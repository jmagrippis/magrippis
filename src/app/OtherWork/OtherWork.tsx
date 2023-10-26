import {Fragment} from 'react'
import Image from 'next/image'
import consultingCover from './consulting.jpg'
import mentoringCover from './mentoring.jpg'
import workshopsCover from './workshops.jpg'
import streamingCover from './streaming.jpg'
import bloggingCover from './blogging.jpg'

import {Paragraph} from '../Paragraph'
import {Subtitle} from '../Subtitle'
import Link from 'next/link'

const orderClasses: Record<number, string> = {
	1: 'xl:order-1',
	2: 'xl:order-2',
	3: 'xl:order-3',
	4: 'xl:order-4',
	5: 'xl:order-5',
	6: 'xl:order-6',
	7: 'xl:order-7',
	8: 'xl:order-8',
	9: 'xl:order-9',
	10: 'xl:order-10',
	11: 'xl:order-11',
	12: 'xl:order-12',
}

const highlights = [
	{
		name: 'Consulting',
		description: (
			<>
				<p>
					I love solving problems and I’ve been doing that professionally as a
					Software Engineer for decades!
				</p>
				<p>
					I’ve reached the level of Principal Software Engineer, and the longer
					I am in the business, the more I seek out projects where we can
					meaningfully affect the lives of more people:
				</p>
				<p>
					Like in <strong>Babylon Health</strong> where we raised Series C to
					fund the mission of bringing affordable healthcare to everyone.
				</p>
				<p>
					Or in <strong>Funding Circle</strong> where I worked on instant
					decisioning for loan applications, including to businesses affected by
					COVID-19.
				</p>
				<p>
					If you have an ambitious project that needs delivering, and are
					looking for an Engineering Consultant who is an expert in Typescript,
					Meta Frameworks such as Next.js & SvelteKit, and evangelises
					meaningful automated testing, feel free to reach out.
				</p>
			</>
		),
		imgSrc: consultingCover,
	},
	{
		name: 'Mentoring',
		description: (
			<>
				<p>
					My most fulfilling work... maybe tied with my YouTube videos, whenever
					I get a particularly heart-felt comment 😄
				</p>
				<p>
					I do spend a lot of time teaching, and my one-to-one mentoring holds a
					special place in my heart. Its intimate nature, the paradoxically
					unique struggles every one of us has, observing progress over a long
					period of time... It’s fascinating.
				</p>
				<p>
					Plus, it’s the most effective way to help someone grow! I love my
					videos and presenting at meetups: the reach is great and a lot of the
					audience will gain at least a little from hearing me out... but
					focusing on an audience of one leads to huge payoff, guaranteed!
				</p>
				<p>
					I can only have so many mentees, but do get in touch if you are
					interested: we may work something out 😄
				</p>
			</>
		),
		imgSrc: mentoringCover,
	},
	{
		name: 'Workshops',
		description: (
			<>
				<p>
					I am a firm believer in the power of workshops. Even those your
					employer forces you to attend! It’s all in the power of the
					facilitators to design something engaging that leaves you with key
					learnings you can apply immediately.
				</p>
				<p>
					I run workshops empowering people to career-change into frontend &
					fullstack engineering, or to advance their careers as software
					engineers.
				</p>
				<p>
					In the first “flavour” of workshop, I take you from zero to deploying
					a javascript app <strong>you built</strong> during the workshop 🚀
				</p>
				<p>
					In the other, we start as an associate engineer who “freezes” during
					interviews, and end up confidently approaching software startup
					problems like a pro 🧑‍💻👩‍💻👨‍💻
				</p>
				<p>
					Reach out if you’re interested in me running either flavour of
					workshop, for your company, or as a group of individuals!
				</p>
			</>
		),
		imgSrc: workshopsCover,
	},
	{
		name: 'Blogging',
		description: (
			<>
				<p>
					I <strong>love</strong> writing!
				</p>
				<p>
					Sure, most of my writing nowadays is video scripts and prep notes for
					livestreams... But, with the fall of Twitter, I think blogging is
					making a real come-back!
				</p>
				<p>
					<Link href="/blog" className="hover:text-emphasis-hover">
						My blog is hosted in this very site
					</Link>
					, and you may
					<a
						href="https://johnnify.com/videos"
						target="_blank"
						rel="noopener noreferrer"
						className="ml-2 hover:text-emphasis-hover"
					>
						find my video transcripts over at Johnnify
					</a>
					.
				</p>
				<p>
					Let me know if the “x time ago” relative timestamps are tremendously
					far back in the past 😅
				</p>
			</>
		),
		imgSrc: bloggingCover,
	},
	{
		name: 'Livestreams',
		description: (
			<>
				<p>
					Yes,
					<a
						href="https://www.youtube.com/@johnnifytech?sub_confirmation=1"
						target="_blank"
						rel="noopener noreferrer"
						className="ml-2 hover:text-emphasis-hover"
					>
						livestreams get a special mention as your final CTA
					</a>{' '}
					😄
				</p>
				<p>
					They’re the public thing I do most often, I currently livestream twice
					a week over at YouTube!
				</p>
				<p>
					Most of the episodes have the recurring theme of “Coding & Chill”. I
					see them as a prime <strong>imposter syndrome cure</strong>: You get
					to see a Principal Software Engineer problem-solve live, and therefore
					stumble and error!
				</p>
				<p>
					And if it’s ok for me to stumble, surely it’s ok for you 😉 On the
					other hand, if I actually ace my way through... that’s fine too: I’ve
					been doing this for literally decades!
				</p>
				<p>
					My videos take <strong>too long</strong> to make, so these livestreams
					are my way of keeping in touch with the community, as I do my research
					for my next “succinct” video tutorial.
				</p>
				<p>See you there? 😘</p>
			</>
		),
		imgSrc: streamingCover,
	},
]

export const OtherWork = () => (
	<section className="flex flex-col items-center">
		<Subtitle>Other work</Subtitle>
		<Paragraph>I do more than educational videos and livecoding! 😄</Paragraph>
		<Paragraph>Here’s a few more of my things you may find useful:</Paragraph>
		<div className="container mb-4 mt-8 grid gap-4 px-2 xl:mb-12 xl:grid-cols-5 xl:gap-8 2xl:gap-16">
			{highlights.map(({name, description, imgSrc}, i) => (
				<Fragment key={name}>
					<Image
						src={imgSrc}
						alt={`Johnny ${name}!`}
						placeholder="blur"
						className={`${
							orderClasses[i * 2 + (i % 2 ? 1 : 0)]
						} rounded-lg shadow-low xl:col-span-3`}
					/>
					<div
						className={`${
							orderClasses[i * 2 + (i % 2 ? 0 : 1)]
						} relative -top-12 -mb-8 xl:top-0 xl:col-span-2 xl:mb-0`}
					>
						<h3 className="mb-6 rounded-b-lg border-b border-emphasis bg-surface-1/80 px-2 text-2xl font-bold text-emphasis backdrop-blur-sm xl:mb-2 xl:inline-block">
							{name}
						</h3>
						<div className="flex flex-col gap-2 text-lg">{description}</div>
					</div>
				</Fragment>
			))}
		</div>
	</section>
)
