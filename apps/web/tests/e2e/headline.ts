import {CURSOR, titles} from '#lib/components/home/titles.js'

const [firstTitle] = titles

/** The first title, typed out whole. */
export const FIRST_TITLE_TYPED = `${firstTitle.title}${CURSOR}`

/** The heading's name, which keeps the first title whichever one is typing. */
export const HEADLINE_NAME = new RegExp(
	`^Hello, I.m Johnny and I.m ${RegExp.escape(`${firstTitle.article} ${firstTitle.title}`)}$`,
)

/** Any of these titles, typed out whole. */
export const anyTitleTyped = (candidates: typeof titles) =>
	new RegExp(
		`^(?:${candidates.map(({title}) => RegExp.escape(title)).join('|')})${RegExp.escape(CURSOR)}$`,
	)
