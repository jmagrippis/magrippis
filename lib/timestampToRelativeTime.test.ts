import { timestampToRelativeTime } from './timestampToRelativeTime'

it('returns a human readable string for timestamps that are minutes ago', () => {
  const timestamp = new Date().getTime() - 2 * 60 * 1000

  expect(timestampToRelativeTime(timestamp)).toBe('2 minutes ago')
})

it('returns a human readable string for timestamps that are hours ago', () => {
  const timestamp = new Date().getTime() - 5 * 60 * 60 * 1000

  expect(timestampToRelativeTime(timestamp)).toBe('5 hours ago')
})

it('returns a human readable string for timestamps that are days ago', () => {
  const timestamp = new Date().getTime() - 4 * 24 * 60 * 60 * 1000

  expect(timestampToRelativeTime(timestamp)).toBe('4 days ago')
})

it('returns a human readable string for timestamps that are months ago', () => {
  const timestamp = new Date().getTime() - 1 * 30 * 24 * 60 * 60 * 1000

  expect(timestampToRelativeTime(timestamp)).toBe('1 month ago')
})
