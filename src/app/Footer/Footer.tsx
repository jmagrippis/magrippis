export const Footer = () => (
	<footer className="flex items-center justify-center gap-2 py-2">
		<div className="flex shrink-0 items-center justify-center gap-2">
			Made with ❤️ by <a href="https://magrippis.com">jmagrippis</a>
		</div>

		<a
			href="https://www.youtube.com/@jmagrippis"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="YouTube"
			className="hover:text-emphasis-hover"
		>
			YouTube
		</a>
		<a
			href="https://github.com/jmagrippis/magrippis"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="checkout the source code at the github repo"
			className="hover:text-emphasis-hover"
		>
			GitHub
		</a>
		<a
			href="https://discord.gg/eR5Q52Sfm3"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Join Johnny's Discord community!"
			className="hover:text-emphasis-hover"
		>
			Discord
		</a>
	</footer>
)
