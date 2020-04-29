import React, { useState, useCallback } from 'react'
import cn from 'classnames'

import { CyclingCTA } from './CyclingCTA'

export const FeaturedPreview = () => {
  const [score, setScore] = useState(0)

  const handleCtaClick = useCallback(
    (win) => {
      setScore(win ? score + 1 : score - 5)
    },
    [score]
  )

  return (
    <div className="flex items-center justify-center">
      <CyclingCTA handleClick={handleCtaClick} className="mr-4" />
      <div>
        <div>Score </div>
        <div
          className={cn('text-center', {
            'text-red-600': score < 0,
            'text-green-600': score > 0,
          })}
        >
          {score}
        </div>
      </div>
    </div>
  )
}
