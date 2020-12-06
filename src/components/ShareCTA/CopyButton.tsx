import { FC, useCallback, useEffect, useState } from 'react'
import cn from 'classnames'

import LinkIcon from './link.svg'
import CheckIcon from './check.svg'

type Props = {
  url: string
}

export const CopyButton: FC<Props> = ({ url }) => {
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
      className="inline-flex relative py-2 pl-4 pr-5 rounded shadow hover:shadow-md bg-purple-400 hover:bg-purple-500 text-white transition duration-300 ease-in-out"
      onClick={handleClick}
    >
      <span
        className={cn('flex items-center justify-center', {
          'opacity-0': justCopied,
        })}
      >
        <LinkIcon className="w-8 mr-2" /> copy link
      </span>
      <span
        className={cn('flex items-center justify-center absolute', {
          'opacity-0': !justCopied,
        })}
      >
        <CheckIcon className="w-8 mr-2 text-green-300" /> copied!
      </span>
    </button>
  )
}
