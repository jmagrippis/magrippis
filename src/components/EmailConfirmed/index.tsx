import { NextSeo } from 'next-seo'

import { getSeoProps } from '../getSeoProps'

import { Body } from './Body'

const title = 'Email confirmed, thanks! | jmagrippis'
const description =
  'You have completed the sign-up to Johnny’s newsletter of weekly learnings, challenges, and curiosities!'

const EmailConfirmed = () => (
  <>
    <NextSeo {...getSeoProps({ title, description })} />
    <Body />
  </>
)

export default EmailConfirmed
