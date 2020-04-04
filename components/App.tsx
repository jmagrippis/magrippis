import * as React from 'react'
import { AppProps } from 'next/app'

import { Header } from './Header'
import { Footer } from './Footer'

export const App = ({ Component, pageProps }: AppProps) => (
  <div className="w-full flex flex-grow flex-col items-center justify-between">
    <Header />
    <Component {...pageProps} />
    <Footer />
  </div>
)
