'use client'

import cn from 'classnames'

import {CopyButton} from './CopyButton'
import {TweetButton} from './TweetButton'
import {useShareUrl} from './useShareUrl'

type Props = {
	title: string
	tags: string[]
	className?: string
}

const ShareCTA = ({className, title, tags}: Props) => {
	const shareUrl = useShareUrl()

	return (
		<aside
			className={cn(
				'mb-2 rounded border border-emphasis bg-surface-2 p-4 text-center shadow-low',
				className,
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
	)
}

export default ShareCTA
