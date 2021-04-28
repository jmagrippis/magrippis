import dynamic from 'next/dynamic'

import { Hero } from './Hero/Hero'
import { Mission } from './Mission'
import { CTA } from './CTA'

const BelowTheFold = dynamic(() => import('./BelowTheFold'))

export const Body = () => (
  <main className="w-full flex-grow">
    <Hero />
    <Mission />
    <CTA />
    <BelowTheFold />
  </main>
)
