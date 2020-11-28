import { NextSeo } from 'next-seo'

import { getSeoProps } from '../getSeoProps'

import { Body } from './Body'

const title = 'Contact | jmagrippis'
const description =
  'Contact Johnny for career advice and mentoring, as well as podcasting, streaming or photography collaborations! Or get in touch to hire as a Principal Engineer or skilled Engineering Consultant with an expertise in Typescript, GraphQL and React.'

const Contact = () => (
  <>
    <NextSeo {...getSeoProps({ title, description })} />
    <Body />
  </>
)

export default Contact
