import { timestampToRelativeTime } from './relativeTime'

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

  it('returns a human readable string for timestamps that are months ago', () => {
    const timestamp = new Date().getTime() - 33 * DAY_IN_MS

    expect(timestampToRelativeTime(timestamp)).toBe('1 month ago')
  })
})
