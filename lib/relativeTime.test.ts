import {
  timestampToRelativeTime,
  isoStringToRelativeTime,
} from './relativeTime'

const MINUTE_IN_MS = 60 * 1000
const HOUR_IN_MS = 60 * MINUTE_IN_MS
const DAY_IN_MS = 24 * HOUR_IN_MS

describe('timestampToRelativeTime', () => {
  it('returns a human readable string for timestamps that are minutes ago', () => {
    const timestamp = new Date().getTime() - 2 * MINUTE_IN_MS - 100

    expect(timestampToRelativeTime(timestamp)).toBe('2 minutes ago')
  })

  it('returns a human readable string for timestamps that are hours ago', () => {
    const timestamp = new Date().getTime() - 5 * HOUR_IN_MS - MINUTE_IN_MS

    expect(timestampToRelativeTime(timestamp)).toBe('5 hours ago')
  })

  it('returns a human readable string for timestamps that are days ago', () => {
    const timestamp = new Date().getTime() - 4 * DAY_IN_MS - HOUR_IN_MS

    expect(timestampToRelativeTime(timestamp)).toBe('4 days ago')
  })

  it('returns a human readable string for timestamps that are a month ago', () => {
    const timestamp = new Date().getTime() - 33 * DAY_IN_MS

    expect(timestampToRelativeTime(timestamp)).toBe('1 month ago')
  })
})

describe('isoStringToRelativeTime', () => {
  it('returns a human readable string for an ISO string that is minutes ago', () => {
    const isoString = new Date(
      new Date().getTime() - 3 * MINUTE_IN_MS - 100
    ).toISOString()

    expect(isoStringToRelativeTime(isoString)).toBe('3 minutes ago')
  })

  it('returns a human readable string for an ISO string that is an hour ago', () => {
    const isoString = new Date(
      new Date().getTime() - 1 * HOUR_IN_MS - MINUTE_IN_MS
    ).toISOString()

    expect(isoStringToRelativeTime(isoString)).toBe('1 hour ago')
  })

  it('returns a human readable string for an ISO string that is days ago', () => {
    const isoString = new Date(
      new Date().getTime() - 2 * DAY_IN_MS - HOUR_IN_MS
    ).toISOString()

    expect(isoStringToRelativeTime(isoString)).toBe('2 days ago')
  })

  it('returns a human readable string for an ISO string that is months ago', () => {
    const isoString = new Date(
      new Date().getTime() - 63 * DAY_IN_MS
    ).toISOString()

    expect(isoStringToRelativeTime(isoString)).toBe('2 months ago')
  })
})
