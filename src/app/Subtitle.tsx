type Props = {
	children: React.ReactNode
}

export const Subtitle = ({children}: Props) => (
	<h2 className="mb-6 text-4xl font-bold text-emphasis drop-shadow-md sm:mb-10">
		{children}
	</h2>
)
