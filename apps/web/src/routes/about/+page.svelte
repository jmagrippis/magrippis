<script lang="ts">
	import PageTitle from '#lib/components/typography/PageTitle.svelte'
	import {GITHUB_REPO_URL, JOHNNIFY_URL} from '#lib/constants'
	import {proseClasses} from '#lib/sharedClasses'
</script>

<main class="container {proseClasses}">
	<PageTitle>About</PageTitle>
	<section class="gap-2 px-2">
		<p>Hello and welcome!</p>
		<p>
			If you want to know more <strong>about me</strong>, you’re better served by
			<a href="/">the homepage</a>.
		</p>
		<p>
			If you want to know more about this website specifically, well, you’re in the right place!
		</p>

		<h2>The Purpose</h2>
		<p>
			This site counts as a “blogfolio”, a showcase of what I can do for work, but also of what I do
			for fun and non-profit 😄
		</p>
		<p>
			It should entice people
			<a
				href="https://www.youtube.com/watch?v=TKKpVlZRFLc"
				target="_blank"
				rel="noopener noreferrer"
			>
				to watch my videos
			</a>, instill confidence I can walk the walk besides talking the talk. It should encourage you
			to reach out for a collaboration or mentoring!
		</p>
		<p>
			It’s not supposed to be overly serious, but it does contain a couple technical posts people
			keeping linking back to. And it <strong>is</strong>, itself, a seriously-made, modern, web
			app, optimised for a fun and fruitful user experience.
		</p>
		<p>
			The common consensus is against creating your own portfolio website to fill out your CV. But
			there’s nothing against creating one when you <strong>do</strong> have a decent CV!
		</p>
		<p>
			Besides, larger projects are truly collaborative, and I don’t stick around companies for too
			long. So, it’d be quite silly of me to say “if you want to see a Next.js app I worked on,
			check out
			<a href="https://www.zoopla.co.uk/" target="_blank" rel="noopener noreferrer"> Zoopla </a>!”
		</p>
		<p>
			It’s technically correct, the best kind of correct, but with this website, it’s clear that: if
			it’s got a feature, I’ve personally worked to implement it, solo 🙌 If it’s unique enough, I
			may even have a tutorial about it!
		</p>
		<p>
			Plus, much like “real” projects, I don’t quite have a carte-blanche to do
			<strong>anything</strong> I want here: There’s awkward requirements! I don’t blog often, but some
			of my posts have gone relatively viral. Therefore, I should ensure noone’s left with broken links!
			Which means how I structure my routes needs to stay consistent.
		</p>
		<p>
			<a href="https://plausible.io/magrippis.com" target="_blank" rel="noopener noreferrer">
				My analytics are public
			</a>
			so you can see we’re not Zoopla by a longshot, but there <strong>is</strong> a decent amount of
			people dropping by 👋
		</p>

		<h2>The Stack</h2>
		<p>
			This site is built with latest <strong>Svelte</strong> and <strong>SvelteKit</strong>, styled
			with
			<strong>Tailwind CSS</strong>, and deployed to <strong>Cloudflare</strong>. The blogposts are
			plain Markdown, highlighted at build time, and every page is prerendered: there’s no server to
			wait on.
		</p>
		<p>
			It used to be a Next.js app hosted on Vercel, which it was for years! Both are excellent, and
			I still reach for Next.js on plenty of paid work. But my own site is where I get to follow my
			curiosity, and Svelte is where it’s been pointing.
		</p>
		<p>
			The code is open-source and free
			<a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer">on GitHub</a>, you’re
			welcome to peruse it! It’s got details on the specific stack I went with to make this site
			tick.
		</p>
		<p>
			I always keep my unpaid projects open-source and free, and have even done so for some of my
			paid work! And I always advise <strong>for being inspired</strong> by my methods, but
			<strong>against blindly copying everything</strong> wholesale.
		</p>
		<p>
			That’s because I think that’s neither the best way to learn, nor likely to impress anyone
			looking at your portfolio / CV. The interviewers will know 😛 If you copy everything
			regardless, as people have done in the past... fair enough! That’s one of the points of
			open-source 😄
		</p>
		<p>
			You can also find
			<a href={JOHNNIFY_URL} target="_blank" rel="noopener noreferrer">Johnnify</a>, my other core
			project, which is SvelteKit too.
		</p>

		<h2>Reaching out</h2>
		<p>
			There is one more secret weapon helping me stay current: <strong>you</strong> 🤗
		</p>
		<p>
			I still read & reply to every single YouTube comment. They are a great resource for validation
			that I’m at least helping someone or leading some discussion, but also a fountain of
			suggestions and ideas!
		</p>
		<p>
			So, please, feel free to comment on any video that strikes your fancy, or reach out through
			the socials in the footer. Some have a higher likelihood of a faster reply than others 😅
		</p>
		<p>And, of course: thanks a bunch for reading! 🤙</p>
	</section>
</main>
