import cn from 'classnames'

import { CopyButton } from './CopyButton'
import { TweetButton } from './TweetButton'

type Props = {
  title: string
  tags: string[]
  className?: string
}

export const ShareCTA = ({ className, title, tags }: Props) => {
  const shareUrl =
    typeof window !== 'undefined'
      ? window.location.href.replace(/\?.+/g, '')
      : null

  return shareUrl ? (
    <aside
      className={cn(
        'text-center bg-white border border-gray-100 p-4 mb-2 rounded shadow-sm bg-opacity-75',
        className
      )}
    >
      <div className="mb-2">💜 sharing is caring 💜</div>
      <div className="flex items-center justify-center">
        <TweetButton
          className="mr-4"
          title={title}
          tags={tags}
          url={shareUrl}
        />
        <CopyButton url={shareUrl} />
      </div>
    </aside>
  ) : null
}
