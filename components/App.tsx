import * as React from 'react'
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import heroImage from './Home/hero.jpg'
import { Header } from './Header'
import { Footer } from './Footer'

const rootUrl = 'https://magrippis.com'

export const App = ({ Component, pageProps }: AppProps) => (
  <>
    <DefaultSeo
      openGraph={{
        type: 'website',
        locale: 'en_UK',
        url: rootUrl,
        site_name: 'jmagrippis',
        images: [
          {
            url: `${rootUrl}${heroImage}`,
            width: 512,
            height: 512,
            alt: 'Johnny Magrippis',
          },
        ],
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
