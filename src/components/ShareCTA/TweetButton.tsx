import cn from 'classnames'

import TwitterIcon from './twitter.svg'

export const TWITTER_INTENT_URL = 'https://twitter.com/intent/tweet'
const TWITTER_HANDLE = 'jmagrippis'

type Props = {
  title: string
  url: string
  tags: string[]
  className?: string
}

// `t.co` shortens urls to a max of 23
// https://developer.twitter.com/en/docs/twitter-api/v1/developer-utilities/configuration/api-reference/get-help-configuration
const TWITTER_SHORT_URL_LENGTH = 23

export const getTwitterHref = ({ url, title, tags }: Props) => {
  const shareUrl = new URL(TWITTER_INTENT_URL)
  const search = new URLSearchParams({
    url,
    text: `${title} ⚛️`,
    hashtags: tags.join(','),
    via: TWITTER_HANDLE,
  }).toString()

  const urlLengthDiff =
    url.length - Math.min(url.length, TWITTER_SHORT_URL_LENGTH)

  if (search.length - Math.max(urlLengthDiff, 0) > 280) {
    throw new Error(`Sharing "${title}" results in a tweet that is too long`)
  }

  shareUrl.search = search

  return shareUrl.href
}

export const TweetButton = (props: Props) => (
  <a
    href={getTwitterHref(props)}
    className={cn(
      'py-2 pl-4 pr-5 rounded inline-flex items-center justify-center shadow hover:shadow-md bg-twitter-blue hover:bg-blue-500 transition duration-300 ease-in-out',
      props.className
    )}
    style={{ color: 'white', textDecoration: 'none' }}
  >
    <TwitterIcon className="w-8 mr-1" />
    tweet
  </a>
)
