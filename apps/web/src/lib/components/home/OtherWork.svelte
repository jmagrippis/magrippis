<script lang="ts">
	import Paragraph from '#lib/components/typography/Paragraph.svelte'
	import Subtitle from '#lib/components/typography/Subtitle.svelte'
	import {JOHNNIFY_URL, YOUTUBE_CHANNEL_URL} from '#lib/constants'

	import bloggingCover from './images/blogging.jpg?enhanced'
	import consultingCover from './images/consulting.jpg?enhanced'
	import mentoringCover from './images/mentoring.jpg?enhanced'
	import streamingCover from './images/streaming.jpg?enhanced'
	import workshopsCover from './images/workshops.jpg?enhanced'
	import OtherWorkItem from './OtherWorkItem.svelte'
</script>

<section class="flex flex-col items-center">
	<Subtitle>Other work</Subtitle>
	<Paragraph>I do more than educational videos and livecoding! 😄</Paragraph>
	<Paragraph>Here’s a few more of my things you may find useful:</Paragraph>

	<div class="container mt-8 mb-4 flex flex-col gap-4 px-2 xl:mb-12 xl:gap-16">
		<OtherWorkItem name="Consulting" image={consultingCover}>
			<p>
				I love solving problems and I’ve been doing that professionally as a Software Engineer for
				decades!
			</p>
			<p>
				I’ve reached the level of Principal Software Engineer, and the longer I am in the business,
				the more I seek out projects where we can meaningfully affect the lives of more people:
			</p>
			<p>
				Like in <strong>Babylon Health</strong> where we raised Series C to fund the mission of bringing
				affordable healthcare to everyone.
			</p>
			<p>
				Or in <strong>Funding Circle</strong> where I worked on instant decisioning for loan applications,
				including to businesses affected by COVID-19.
			</p>
			<p>
				If you have an ambitious project that needs delivering, and are looking for an Engineering
				Consultant who is an expert in Typescript, Meta Frameworks such as Next.js & SvelteKit, and
				evangelises meaningful automated testing, feel free to reach out.
			</p>
		</OtherWorkItem>

		<OtherWorkItem name="Mentoring" image={mentoringCover} reversed>
			<p>
				My most fulfilling work... maybe tied with my YouTube videos, whenever I get a particularly
				heart-felt comment 😄
			</p>
			<p>
				I do spend a lot of time teaching, and my one-to-one mentoring holds a special place in my
				heart. Its intimate nature, the paradoxically unique struggles every one of us has,
				observing progress over a long period of time... It’s fascinating.
			</p>
			<p>
				Plus, it’s the most effective way to help someone grow! I love my videos and presenting at
				meetups: the reach is great and a lot of the audience will gain at least a little from
				hearing me out... but focusing on an audience of one leads to huge payoff, guaranteed!
			</p>
			<p>
				I can only have so many mentees, but do get in touch if you are interested: we may work
				something out 😄
			</p>
		</OtherWorkItem>

		<OtherWorkItem name="Workshops" image={workshopsCover}>
			<p>
				I am a firm believer in the power of workshops. Even those your employer forces you to
				attend! It’s all in the power of the facilitators to design something engaging that leaves
				you with key learnings you can apply immediately.
			</p>
			<p>
				I run workshops empowering people to career-change into frontend & fullstack engineering, or
				to advance their careers as software engineers.
			</p>
			<p>
				In the first “flavour” of workshop, I take you from zero to deploying a javascript app <strong
					>you built</strong
				> during the workshop 🚀
			</p>
			<p>
				In the other, we start as an associate engineer who “freezes” during interviews, and end up
				confidently approaching software startup problems like a pro 🧑‍💻👩‍💻👨‍💻
			</p>
			<p>
				Reach out if you’re interested in me running either flavour of workshop, for your company,
				or as a group of individuals!
			</p>
		</OtherWorkItem>

		<OtherWorkItem name="Blogging" image={bloggingCover} reversed>
			<p>
				I <strong>love</strong> writing!
			</p>
			<p>
				Sure, most of my writing nowadays is video scripts and prep notes for livestreams... But,
				with the fall of Twitter, I think blogging is making a real come-back!
			</p>
			<p>
				<a href="/blog" class="hover:text-emphasis-hover">My blog is hosted in this very site</a>,
				and you may
				<a
					href="{JOHNNIFY_URL}/videos"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-emphasis-hover ml-2"
				>
					find my video transcripts over at Johnnify
				</a>.
			</p>
			<p>
				Let me know if the “x time ago” relative timestamps are tremendously far back in the past 😅
			</p>
		</OtherWorkItem>

		<OtherWorkItem name="Livestreams" image={streamingCover}>
			<p>
				Yes,
				<a
					href={YOUTUBE_CHANNEL_URL}
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-emphasis-hover ml-2"
				>
					livestreams get a special mention as your final CTA
				</a> 😄
			</p>
			<p>
				They’re the public thing I do most often, I currently livestream twice a week over at
				YouTube!
			</p>
			<p>
				Most of the episodes have the recurring theme of “Coding & Chill”. I see them as a prime <strong
					>imposter syndrome cure</strong
				>: You get to see a Principal Software Engineer problem-solve live, and therefore stumble
				and error!
			</p>
			<p>
				And if it’s ok for me to stumble, surely it’s ok for you 😉 On the other hand, if I actually
				ace my way through... that’s fine too: I’ve been doing this for literally decades!
			</p>
			<p>
				My videos take <strong>too long</strong> to make, so these livestreams are my way of keeping in
				touch with the community, as I do my research for my next “succinct” video tutorial.
			</p>
			<p>See you there? 😘</p>
		</OtherWorkItem>
	</div>
</section>
