import { DateTime } from 'luxon'

export const timestampToRelativeTime = (timestamp: number) =>
  DateTime.fromMillis(timestamp).toRelative()
