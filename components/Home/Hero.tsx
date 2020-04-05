import React, { useState, useEffect } from 'react'
import { sample } from 'lodash'

import heroImage from './hero.jpg'
import { roles } from './roles'

const RESELECT_INTERVAL = 2000

export const Hero = () => {
  const [role, setRole] = useState(roles[0])

  useEffect(() => {
    const interval = setInterval(() => {
      setRole(sample(roles))
    }, RESELECT_INTERVAL)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <section className="p-8 bg-teal-200">
      <div className="container m-auto flex items-center justify-center flex-wrap sm:flex-no-wrap">
        <img
          src={heroImage}
          className="h-64 w-64 rounded-full shadow-lg mb-8 sm:mr-16 sm:mb-0"
        />
        <div className="text-right" style={{ flexBasis: '60ch' }}>
          <p className="text-3xl mb-1">Hi, I’m Johnny and I’m</p>
          <p className="text-4xl text-purple-600">{role}</p>
        </div>
      </div>
    </section>
  )
}
