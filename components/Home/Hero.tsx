import React, { useState, useEffect } from 'react'
import { shuffle } from 'lodash'
import { useTransition, animated } from 'react-spring'

import heroImage from './hero.jpg'
import { allRoles } from './allRoles'

const RESELECT_INTERVAL = 3000

export const Hero = () => {
  const [firstRole, ...otherRoles] = allRoles
  const [roles, setRoles] = useState([firstRole, ...shuffle(otherRoles)])

  useEffect(() => {
    const interval = setInterval(() => {
      if (!document?.hasFocus()) return

      setRoles((currentRoles) =>
        currentRoles.length > 1 ? currentRoles.slice(1) : shuffle(allRoles)
      )
    }, RESELECT_INTERVAL)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const transitions = useTransition(roles[0], null, {
    from: {
      opacity: 0,
      transform: 'translate3d(0,2rem,0)',
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0,0,0)',
    },
    leave: {
      opacity: 0,
      transform: 'translate3d(0,-2rem,0)',
    },
  })

  return (
    <section className="p-8">
      <div className="container m-auto flex items-center justify-center flex-wrap sm:flex-no-wrap">
        <img
          src={heroImage}
          className="h-64 w-64 rounded-full shadow-lg mb-8 sm:mr-16 sm:mb-0"
          title="Johnny’s avatar"
          alt="Johnny’s avatar"
        />
        <div className="text-right" style={{ flexBasis: '60ch' }}>
          <p className="text-3xl mb-1">Hi, I’m Johnny and I’m</p>

          <p className="relative text-4xl text-purple-600 h-24 sm:h-auto">
            {transitions.map(({ item, key, props }) => (
              <animated.span
                className="absolute right-0 text-shadow-md"
                key={key}
                style={props}
              >
                {item}
              </animated.span>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}
