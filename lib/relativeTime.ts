import { DateTime } from 'luxon'

export const timestampToRelativeTime = (timestamp: number) =>
  DateTime.fromMillis(timestamp).toRelative()

export const isoStringToRelativeTime = (isoString: string) =>
  DateTime.fromISO(isoString).toRelative()
