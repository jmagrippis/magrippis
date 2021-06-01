import { NextSeo } from 'next-seo'

import { getSeoProps } from '../getSeoProps'

import { Body } from './Body'

const title = 'You’ve signed-up, thanks! | jmagrippis'
const description =
  'You have signed up to Johnny’s newsletter of weekly learnings, challenges, and curiosities! Do not forget to confirm your email 😄'

const SignupSuccess = () => (
  <>
    <NextSeo {...getSeoProps({ title, description })} />
    <Body />
  </>
)

export default SignupSuccess
