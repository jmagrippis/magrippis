import {DateTime} from 'luxon'

import {SITE_LANGUAGE} from './constants'

// Luxon would otherwise follow the browser's locale, and write "vor 3 Jahren" into English prose
const options = {locale: SITE_LANGUAGE}

export const isoStringToRelativeTime = (isoString: string) =>
	DateTime.fromISO(isoString, options).toRelative()

export const isoStringToAbsoluteDate = (isoString: string) =>
	DateTime.fromISO(isoString, options).toUTC().toFormat('d LLLL yyyy')
