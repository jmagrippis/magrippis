import React, { useState } from 'react'
import cn from 'classnames'

export const Demonstration = () => {
  const [tapped, setTapped] = useState(false)

  return (
    <div className="py-4">
      <button
        className={cn(
          'w-full p-4 rounded shadow-lg text-center transition duration-300 focus:outline-none border-4',
          {
            'bg-teal-200 text-teal-900 border-teal-100': tapped,
            'bg-purple-600 text-purple-100 border-purple-400 focus:border-teal-100': !tapped,
          }
        )}
        type="button"
        onClick={() => setTapped(!tapped)}
      >
        🤜 Tap this React Component 🤛
      </button>
    </div>
  )
}
