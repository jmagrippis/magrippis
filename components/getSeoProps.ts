import { rootUrl } from '../lib/constants'

const defaultSeo = {
  title: 'jmagrippis | coding challenges and success without stress',
  description:
    'Johnny Magrippis is a Fullstack Engineer / Mentor / Photographer / (...)  challenging the need to have a niche.',
  openGraph: {
    type: 'website',
    locale: 'en_UK',
    url: rootUrl,
    site_name: 'jmagrippis',
    images: [
      {
        url: `${rootUrl}/images/hero.jpg`,
        width: 512,
        height: 512,
        alt: 'Johnny Magrippis',
      },
    ],
  },
  twitter: {
    handle: '@jmagrippis',
    cardType: 'summary',
  },
}

export const getSeoProps = ({
  title = defaultSeo.title,
  description = defaultSeo.description,
  openGraph = {},
  twitter = {},
} = {}) => ({
  title,
  description,
  openGraph: { ...defaultSeo.openGraph, title, description, ...openGraph },
  twitter: { ...defaultSeo.twitter, ...twitter },
})
