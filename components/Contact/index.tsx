import React from 'react'
import { NextSeo } from 'next-seo'

import { Body } from './Body'
import { getSeoProps } from '../getSeoProps'

const title = 'Contact | jmagrippis'
const description =
  'Contact Johnny for career advice and mentoring, as well as podcasting, streaming or photography collaborations!'

const Contact = () => (
  <>
    <NextSeo {...getSeoProps({ title, description })} />
    <Body />
  </>
)

export default Contact
