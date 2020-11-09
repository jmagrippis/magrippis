import { rootUrl } from 'lib/constants'

export const getShareUrl = ({
  location,
  path,
}: {
  location?: Pick<Location, 'protocol' | 'host'>
  path: string
}) =>
  location
    ? `${location.protocol}//${location.host}${path}`
    : `${rootUrl}${path}`
