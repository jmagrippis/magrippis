import cn from 'classnames'

import TwitterIcon from './twitter.svg'

type Props = {
  title: string
  url: string
  tags: string[]
  className?: string
}

const TWITTER_INTENT_URL = 'https://twitter.com/intent/tweet'
const TWITTER_HANDLE = 'jmagrippis'

export const getTwitterHref = ({
  url,
  title,
  tags,
}: Omit<Props, 'className'>) => {
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

export const ShareCTA = ({ className, ...restProps }: Props) => (
  <aside
    className={cn(
      'text-center bg-white border border-gray-100 p-4 mb-2 rounded shadow-sm bg-opacity-75',
      className
    )}
  >
    <div className="mb-2">💜 sharing is caring 💜</div>
    <a
      href={getTwitterHref(restProps)}
      className="py-2 pl-4 pr-5 rounded inline-flex items-center justify-center shadow hover:shadow-md bg-twitter-blue hover:bg-blue-500 transition duration-300 ease-in-out"
      style={{ color: 'white', textDecoration: 'none' }}
    >
      <TwitterIcon className="w-8 mr-1" />
      tweet
    </a>
  </aside>
)
