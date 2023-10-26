type Props = {
	children: React.ReactNode
}

export const Paragraph = ({children}: Props) => (
	<p className="container max-w-prose px-2 text-center text-2xl sm:py-4 lg:mb-8">
		{children}
	</p>
)
