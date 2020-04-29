import React from 'react'
import cn from 'classnames'

import { useCyclingElement } from './useCyclingElement'

const conditions = ['win', 'lose']

type Props = {
  handleClick: (win: boolean) => void
  className?: string
}

export const CyclingCTA = ({ handleClick, className }: Props) => {
  const condition = useCyclingElement({ elements: conditions, intervalMs: 300 })

  return (
    <button
      className={cn(
        'p-4 rounded bg-purple-200 shadow-lg text-center border-4 border-purple-300 transition duration-300 focus:outline-none focus:border-purple-400 focus:text-purple-800 flex',
        className
      )}
      style={{ width: '16ch' }}
      type="button"
      onClick={(event) => {
        event.preventDefault()
        handleClick(condition === 'win')
      }}
    >
      <span>hit to</span> <span className="flex-grow">{condition}</span>
    </button>
  )
}
