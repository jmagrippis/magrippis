export const proseClasses =
	'prose prose-lg prose-stone dark:prose-invert lg:prose-xl xl:prose-2xl prose-a:decoration-emphasis prose-a:decoration-2 prose-a:transition-colors hover:prose-a:text-emphasis hover:prose-a:decoration-emphasis-hover prose-code:rounded-sm prose-pre:py-2 prose-pre:my-2 prose-pre:px-4 prose-img:mx-auto md:prose-img:rounded md:prose-img:shadow-low pt-10'

// the width `proseClasses` gives the column from each breakpoint up; below them all, it spans the screen
const PROSE_COLUMN_WIDTHS = [
	[1280, 1014],
	[1024, 845],
	[768, 761],
] as const

/** An image's `sizes` across the prose column, less `padding` pixels of it. */
export const proseColumnSizes = (padding: number) =>
	[
		...PROSE_COLUMN_WIDTHS.map(
			([breakpoint, width]) => `(min-width: ${breakpoint}px) ${width - padding}px`,
		),
		padding ? `calc(100vw - ${padding}px)` : '100vw',
	].join(', ')
