import React from 'react'

import { Hero } from './Hero'
import { Mission } from './Mission'
import { CTA } from './CTA'
import { Highlights } from './Highlights/Highlights'

export const Body = () => (
  <main className="w-full flex-grow">
    <Hero />
    <Mission />
    <CTA />
    <Highlights />
  </main>
)
