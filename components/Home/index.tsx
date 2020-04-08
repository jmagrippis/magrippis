import React from 'react'
import { NextSeo } from 'next-seo'

import { Body } from './Body'

const Home = () => (
  <>
    <NextSeo
      title="jmagrippis - Johnny Magrippis"
      description="Johnny Magrippis is Fullstack Engineer / Mentor / Photographer / (...)  challenging the need to have a niche."
    />
    <Body />
  </>
)

export default Home
