import React from 'react'

import { Hero } from './Hero'
import { Mission } from './Mission'
import { CTA } from './CTA'
import { Highlights } from './Highlights/Highlights'
import { Signup } from './Signup'

export const Body = () => (
  <main className="w-full flex-grow">
    <Hero />
    <Mission />
    <CTA />
    <Highlights />
    <Signup prompt="If you made it this far, how about subscribing to..." />
  </main>
)
