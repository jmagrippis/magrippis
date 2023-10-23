'use client'

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
const MAX_TWEET_LENGTH = 280

export const getTwitterHref = ({url, title, tags}: Props) => {
	const shareUrl = new URL(TWITTER_INTENT_URL)
	const search = new URLSearchParams({
		url,
		text: `${title} ⚛️`,
		hashtags: tags.join(','),
		via: TWITTER_HANDLE,
	}).toString()

	const urlLengthDiff =
		url.length - Math.min(url.length, TWITTER_SHORT_URL_LENGTH)

	if (search.length - Math.max(urlLengthDiff, 0) > MAX_TWEET_LENGTH) {
		throw new Error(`Sharing "${title}" results in a tweet that is too long`)
	}

	shareUrl.search = search

	return shareUrl.href
}

export const TweetButton = (props: Props) => (
	<a
		href={getTwitterHref(props)}
		className={cn(
			'inline-flex items-center justify-center rounded bg-[#26a7de] py-2 pl-4 pr-5 shadow-low transition duration-300 ease-in-out hover:bg-primary-200 hover:shadow-mid dark:hover:bg-primary-800',
			props.className,
		)}
		style={{color: 'white', textDecoration: 'none'}}
	>
		<TwitterIcon className="mr-1 w-8" />
		tweet
	</a>
)
