import * as React from 'react'
import Head from 'next/head'

type Props = {
  title: string
}

export const Meta = ({ title }: Props) => (
  <Head>
    <title>{title}</title>
    <meta
      name="description"
      content="The 'calling-card' website of Johnny Magrippis, an experienced App Developer, photographer, gamer and beach volleyball player."
    />
    <link rel="icon" href="/favicon.ico" />
    <link
      href="https://fonts.googleapis.com/css?family=Fira+Code:400,600&display=swap"
      rel="stylesheet"
    />
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
    />
  </Head>
)
