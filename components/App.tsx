import * as React from 'react'
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import { Header } from './Header'
import { Footer } from './Footer'

export const App = ({ Component, pageProps }: AppProps) => (
  <>
    <DefaultSeo
      openGraph={{
        type: 'website',
        locale: 'en_UK',
        url: 'https://magrippis.com/',
        site_name: 'jmagrippis',
      }}
      twitter={{
        handle: '@jmagrippis',
        cardType: 'summary',
      }}
    />
    <div className="w-full flex flex-grow flex-col items-center justify-between">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  </>
)
