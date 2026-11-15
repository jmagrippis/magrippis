import {Settings} from 'luxon'
import {describe, expect, it} from 'vite-plus/test'

import {isoStringToAbsoluteDate, isoStringToRelativeTime} from './relativeTime'

const MINUTE_IN_MS = 60 * 1000
const HOUR_IN_MS = 60 * MINUTE_IN_MS
const DAY_IN_MS = 24 * HOUR_IN_MS

describe('isoStringToRelativeTime', () => {
	it('returns a human readable string for an ISO string that is minutes ago', () => {
		const isoString = new Date(new Date().getTime() - 3 * MINUTE_IN_MS - 100).toISOString()

		expect(isoStringToRelativeTime(isoString)).toBe('3 minutes ago')
	})

	it('returns a human readable string for an ISO string that is an hour ago', () => {
		const isoString = new Date(new Date().getTime() - 1 * HOUR_IN_MS - MINUTE_IN_MS).toISOString()

		expect(isoStringToRelativeTime(isoString)).toBe('1 hour ago')
	})

	it('returns a human readable string for an ISO string that is days ago', () => {
		const isoString = new Date(new Date().getTime() - 2 * DAY_IN_MS - HOUR_IN_MS).toISOString()

		expect(isoStringToRelativeTime(isoString)).toBe('2 days ago')
	})

	it('returns a human readable string for an ISO string that is months ago', () => {
		const isoString = new Date(new Date().getTime() - 63 * DAY_IN_MS).toISOString()

		expect(isoStringToRelativeTime(isoString)).toBe('2 months ago')
	})

	it('returns null for a string that is not ISO 8601', () => {
		expect(isoStringToRelativeTime('the 4th of July')).toBeNull()
	})

	it('stays in English, the page’s language, in a German browser', () => {
		const browserLocale = Settings.defaultLocale
		Settings.defaultLocale = 'de'
		// over 3 years whatever leap days fall between, and under 4
		const isoString = new Date(new Date().getTime() - 1100 * DAY_IN_MS).toISOString()

		try {
			expect(isoStringToRelativeTime(isoString)).toBe('3 years ago')
			expect(isoStringToAbsoluteDate('2020-12-06T23:35:00.000Z')).toBe('6 December 2020')
		} finally {
			Settings.defaultLocale = browserLocale
		}
	})
})

describe('isoStringToAbsoluteDate', () => {
	// baked into prerendered HTML, so it must not shift with the build machine's
	// timezone — CI is UTC, Johnny is not
	it('formats in UTC rather than the local timezone', () => {
		expect(isoStringToAbsoluteDate('2020-12-06T23:35:00.000Z')).toBe('6 December 2020')
	})

	it('does not roll back a date for timezones behind UTC', () => {
		expect(isoStringToAbsoluteDate('2021-04-05T00:30:00.000Z')).toBe('5 April 2021')
	})
})
