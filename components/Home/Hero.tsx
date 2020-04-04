import React from 'react'

import heroImage from './hero.jpg'

export const Hero = () => (
  <section className="p-8 bg-green-200">
    <div className="container m-auto flex items-center justify-center flex-wrap sm:flex-no-wrap">
      <img
        src={heroImage}
        className="h-64 w-64 rounded-full shadow-lg mb-4 sm:mr-16 sm:mb-0"
      />
      <div className="text-right">
        <p className="text-3xl mb-1">Hi, I’m Johnny and I’m</p>
        <p className="text-4xl text-purple-800">an engineer</p>
      </div>
    </div>
  </section>
)
