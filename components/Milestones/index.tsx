import React from 'react'
import { NextSeo } from 'next-seo'

import { Body } from './Body'
import { getSeoProps } from '../getSeoProps'

const title = 'Milestones | jmagrippis'
const description = 'Curated activity feed of what Johnny has been up to.'

const Milestones = () => (
  <>
    <NextSeo {...getSeoProps({ title, description })} />
    <Body />
  </>
)

export default Milestones
