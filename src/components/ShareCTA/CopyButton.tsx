'use client'

import {useCallback, useEffect, useState} from 'react'
import cn from 'classnames'

import LinkIcon from './link.svg'
import CheckIcon from './check.svg'

type Props = {
	url: string
}

export const CopyButton = ({url}: Props) => {
	const [justCopied, setJustCopied] = useState(false)

	const handleClick = useCallback(async () => {
		await navigator.clipboard.writeText(url)

		setJustCopied(true)
	}, [url])

	useEffect(() => {
		if (justCopied) {
			const timeout = setTimeout(() => {
				setJustCopied(false)
			}, 2000)

			return () => clearTimeout(timeout)
		}
	}, [justCopied])

	return (
		<button
			className="relative inline-flex rounded bg-surface-1 py-2 pl-4 pr-5 shadow-low transition duration-300 ease-in-out hover:bg-primary-200 hover:shadow-mid dark:hover:bg-primary-800"
			onClick={handleClick}
		>
			<span
				className={cn('flex items-center justify-center', {
					'opacity-0': justCopied,
				})}
			>
				<LinkIcon className="mr-2 w-8" /> copy link
			</span>
			<span
				className={cn('absolute flex items-center justify-center', {
					'opacity-0': !justCopied,
				})}
			>
				<CheckIcon className="mr-2 w-8 text-secondary-300" /> copied!
			</span>
		</button>
	)
}
