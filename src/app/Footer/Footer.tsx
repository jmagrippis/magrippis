import YouTubeIcon from '@/icons/youtube.svg'
import GitHubIcon from '@/icons/github.svg'
import DiscordIcon from '@/icons/discord.svg'

export const Footer = () => (
	<footer className="flex items-center justify-center gap-2 py-2">
		<div className="flex shrink-0 items-center justify-center gap-2">
			Made with ❤️ by <a href="https://magrippis.com">jmagrippis</a>
		</div>

		<a
			href="https://www.youtube.com/@jmagrippis"
			target="_blank"
			rel="noopener noreferrer"
		>
			<YouTubeIcon
				title="Johnny's fun & informative YouTube channel 😄"
				className="w-6 hover:text-emphasis-hover"
			/>
		</a>
		<a
			href="https://github.com/jmagrippis/magrippis"
			target="_blank"
			rel="noopener noreferrer"
		>
			<GitHubIcon
				title="The code for this app, open-source and free on GitHub!"
				className="w-5 hover:text-emphasis-hover"
			/>
		</a>
		<a
			href="https://discord.gg/eR5Q52Sfm3"
			target="_blank"
			rel="noopener noreferrer"
		>
			<DiscordIcon
				title="Join Johnny's Discord Community!"
				className="w-7 hover:text-emphasis-hover"
			/>
		</a>
	</footer>
)
