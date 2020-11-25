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

export const getTwitterHref = ({ url, title, tags }: Props) => {
  const shareUrl = new URL(TWITTER_INTENT_URL)
  const search = new URLSearchParams({
    url,
    text: `${title} ⚛️`,
    hashtags: tags.join(','),
    via: TWITTER_HANDLE,
  }).toString()

  if (search.length > 280) {
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
