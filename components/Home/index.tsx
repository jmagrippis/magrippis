import React from 'react'
import { NextSeo } from 'next-seo'

import { Body } from './Body'

const TITLE = 'jmagrippis | Johnny Magrippis'
const DESCRIPTION =
  'Johnny Magrippis is a Fullstack Engineer / Mentor / Photographer / (...)  challenging the need to have a niche.'

const Home = () => (
  <>
    <NextSeo
      title={TITLE}
      description={TITLE}
      openGraph={{
        title: TITLE,
        description: DESCRIPTION,
      }}
    />
    <Body />
  </>
)

export default Home
