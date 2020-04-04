import React from 'react'

import { Hero } from './Hero'
import { Mission } from './Mission'
import { CTA } from './CTA'

export const Body = () => (
  <main className="w-full flex-grow">
    <Hero />
    <Mission />
    <CTA />
  </main>
)
