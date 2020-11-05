import { useState } from 'react'

import {
  isoStringToRelativeTime,
  timestampToRelativeTime,
} from 'lib/relativeTime'

const renderRelativeFromTimestamp = (timestamp: string) => {
  const parsedTimestamp = parseInt(timestamp)
  if (Number.isNaN(parsedTimestamp)) return 'not a valid timestamp'
  if (parsedTimestamp > Number.MAX_SAFE_INTEGER) return 'that is too large!'
  if (parsedTimestamp < 0) return 'use a positive number 🧐'

  return timestampToRelativeTime(parsedTimestamp)
}

const renderRelativeFromIsoString = (isoString: string) =>
  isoStringToRelativeTime(isoString) ?? 'not ISO 8601...'

export const RelativeTimeDemo = () => {
  const [timestamp, setTimestamp] = useState(
    `${new Date().getTime() - 25 * 60 * 60 * 1000}`
  )

  const [isoString, setIsoString] = useState(
    new Date(new Date().getTime() - 16 * 24 * 60 * 60 * 1000).toISOString()
  )

  const setToNow = () => {
    const timestamp = new Date().getTime() - 1000

    setTimestamp(`${timestamp}`)
    setIsoString(new Date(timestamp).toISOString())
  }

  return (
    <div className="p-4 bg-white rounded shadow">
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 sm:gap-8 items-center mb-6">
        <label htmlFor="timestamp" className="text-gray-700 sm:text-right">
          Timestamp
        </label>
        <input
          required
          id="timestamp"
          name="timestamp"
          type="text"
          className="form-input w-full px-1 py-2 rounded shadow focus:outline-none focus:shadow-outline mb-4 sm:mb-0 sm:col-span-2"
          value={timestamp}
          onChange={({ currentTarget: { value } }) => {
            setTimestamp(value)
          }}
        />
        <div className="sm:col-span-2 font-semibold">
          {renderRelativeFromTimestamp(timestamp)}
        </div>

        <span
          className="w-full sm:hidden rounded shadow-lg border border-purple-400"
          onClick={setToNow}
        />

        <label htmlFor="iso-string" className="text-gray-700 sm:text-right">
          ISO String
        </label>
        <input
          required
          id="iso-string"
          name="iso-string"
          type="text"
          className="form-input w-full px-1 py-2 rounded shadow focus:outline-none focus:shadow-outline mb-4 sm:mb-0 sm:col-span-2"
          value={isoString}
          onChange={({ currentTarget: { value } }) => {
            setIsoString(value)
          }}
        />
        <div className="sm:col-span-2 font-semibold">
          {renderRelativeFromIsoString(isoString)}
        </div>
      </div>

      <button
        className="w-full p-2 rounded shadow-lg text-center transition duration-300 focus:outline-none border-4 bg-purple-600 text-purple-100 border-purple-400 focus:border-purple-200"
        onClick={setToNow}
      >
        set both to now!
      </button>
    </div>
  )
}
