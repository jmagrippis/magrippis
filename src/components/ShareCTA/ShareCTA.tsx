import cn from 'classnames'

import { TweetButton } from './TweetButton'
import { CopyButton } from './CopyButton'

type Props = {
  title: string
  url: string
  tags: string[]
  className?: string
}

export const ShareCTA = ({ className, ...restProps }: Props) => (
  <aside
    className={cn(
      'text-center bg-white border border-gray-100 p-4 mb-2 rounded shadow-sm bg-opacity-75',
      className
    )}
  >
    <div className="mb-2">💜 sharing is caring 💜</div>
    <div className="flex items-center justify-center">
      <TweetButton {...restProps} className="mr-4" />
      <CopyButton url={restProps.url} />
    </div>
  </aside>
)
