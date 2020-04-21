import React, { useState } from 'react'
import cn from 'classnames'

export const Demonstration = () => {
  const [tapped, setTapped] = useState(false)

  return (
    <div
      className={cn(
        'cursor-pointer p-4 rounded shadow-lg text-center transition duration-300',
        {
          'bg-teal-200 text-teal-900': tapped,
          'bg-purple-600 text-purple-100': !tapped,
        }
      )}
      onClick={() => setTapped(!tapped)}
    >
      🤜 Tap this React Component 🤛
    </div>
  )
}
