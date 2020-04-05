import React, { useState, useEffect } from 'react'
import { sample } from 'lodash'
import { useTransition, animated } from 'react-spring'

import heroImage from './hero.jpg'
import { roles } from './roles'

const RESELECT_INTERVAL = 3000

export const Hero = () => {
  const [role, setRole] = useState(roles[0])

  useEffect(() => {
    const interval = setInterval(() => {
      let next = role
      while (next === role) {
        next = sample(roles)
      }

      setRole(next)
    }, RESELECT_INTERVAL)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const transitions = useTransition(role, null, {
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
      transform: 'translate3d(0,2rem,0)',
    },
  })

  return (
    <section className="p-8 bg-teal-200">
      <div className="container m-auto flex items-center justify-center flex-wrap sm:flex-no-wrap">
        <img
          src={heroImage}
          className="h-64 w-64 rounded-full shadow-lg mb-8 sm:mr-16 sm:mb-0"
        />
        <div className="text-right" style={{ flexBasis: '60ch' }}>
          <p className="text-3xl mb-1">Hi, I’m Johnny and I’m</p>

          {transitions.map(
            ({ item, key, props }) =>
              item === role && (
                <animated.p
                  className="text-4xl text-purple-600 h-24 bg-teal-200 sm:h-auto"
                  key={key}
                  style={props}
                >
                  {item}
                </animated.p>
              )
          )}
        </div>
      </div>
    </section>
  )
}
