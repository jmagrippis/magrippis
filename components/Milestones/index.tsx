import React from 'react'
import { NextSeo } from 'next-seo'

import { Body } from './Body'

const TITLE = 'Milestones | jmagrippis'
const DESCRIPTION = 'Curated activity feed of what Johnny has been up to.'

const Milestones = () => (
  <>
    <NextSeo title={TITLE} description={DESCRIPTION} />
    <Body />
  </>
)

export default Milestones
