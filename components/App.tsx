import * as React from 'react'
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import { Header } from './Header'
import { Footer } from './Footer'
import { getSeoProps } from './getSeoProps'

export const App = ({ Component, pageProps }: AppProps) => (
  <>
    <DefaultSeo {...getSeoProps()} />
    <div className="w-full flex flex-grow flex-col items-center justify-between">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  </>
)
