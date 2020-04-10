import React from 'react'
import { NextSeo } from 'next-seo'

import { Body } from './Body'

const TITLE = 'Contact | jmagrippis'
const DESCRIPTION =
  'Contact Johnny for career advice and mentoring, as well as podcasting, streaming or photography collaborations!'

const Contact = () => (
  <>
    <NextSeo title={TITLE} description={DESCRIPTION} />
    <Body />
  </>
)

export default Contact
