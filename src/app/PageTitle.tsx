export const PageTitle = ({children}: {children: React.ReactNode}) => (
	<h1 className="bg-gradient-to-bl from-secondary-600 from-50% via-primary-500 to-primary-400 bg-clip-text px-2 py-1 text-5xl font-extrabold text-transparent drop-shadow dark:from-secondary-500 dark:via-primary-400 dark:to-primary-200 lg:text-6xl xl:text-7xl">
		{children}
	</h1>
)
