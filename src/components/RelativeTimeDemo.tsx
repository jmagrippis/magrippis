'use client'

import {useState} from 'react'

import {
	isoStringToRelativeTime,
	timestampToRelativeTime,
} from '@/lib/relativeTime'

const renderRelativeFromTimestamp = (timestamp: string) => {
	const parsedTimestamp = parseInt(timestamp)
	if (Number.isNaN(parsedTimestamp)) return 'not a valid timestamp'
	if (parsedTimestamp > Number.MAX_SAFE_INTEGER) return 'that is too large!'
	if (parsedTimestamp < 0) return 'use a positive number 🧐'

	return timestampToRelativeTime(parsedTimestamp)
}

const renderRelativeFromIsoString = (isoString: string) =>
	isoStringToRelativeTime(isoString) ?? 'not ISO 8601...'

const inputClasses =
	'shadow mb-4 w-full rounded bg-surface-1 p-2 focus:border-primary-100 focus:outline-none focus:ring focus:ring-primary-400 sm:col-span-2 sm:mb-0'

const RelativeTimeDemo = () => {
	const [timestamp, setTimestamp] = useState(
		`${new Date().getTime() - 25 * 60 * 60 * 1000}`,
	)

	const [isoString, setIsoString] = useState(
		new Date(new Date().getTime() - 16 * 24 * 60 * 60 * 1000).toISOString(),
	)

	const setToNow = () => {
		const timestamp = new Date().getTime() - 1000

		setTimestamp(`${timestamp}`)
		setIsoString(new Date(timestamp).toISOString())
	}

	return (
		<div className="rounded bg-surface-2 p-4 shadow-low">
			<div className="mb-6 grid grid-cols-1 items-center gap-4 sm:grid-cols-5 sm:gap-8">
				<label htmlFor="timestamp" className="sm:text-right">
					Timestamp
				</label>
				<input
					required
					id="timestamp"
					name="timestamp"
					className={inputClasses}
					value={timestamp}
					onChange={({currentTarget: {value}}) => {
						setTimestamp(value)
					}}
				/>
				<div className="font-semibold sm:col-span-2">
					{renderRelativeFromTimestamp(timestamp)}
				</div>

				<span
					className="w-full rounded border border-primary-400 shadow-mid sm:hidden"
					onClick={setToNow}
				/>

				<label htmlFor="iso-string" className="sm:text-right">
					ISO String
				</label>
				<input
					required
					id="iso-string"
					name="iso-string"
					type="text"
					className={inputClasses}
					value={isoString}
					onChange={({currentTarget: {value}}) => {
						setIsoString(value)
					}}
				/>
				<div className="font-semibold sm:col-span-2">
					{renderRelativeFromIsoString(isoString)}
				</div>
			</div>

			<button
				className="w-full rounded border-4 border-primary-400 bg-primary-600 p-2 text-center text-primary-100 shadow-mid transition duration-300 focus:border-primary-200 focus:outline-none"
				onClick={setToNow}
			>
				set both to now!
			</button>
		</div>
	)
}

export default RelativeTimeDemo
