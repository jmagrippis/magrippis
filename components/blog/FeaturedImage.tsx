import React from 'react'
import { NextSeo } from 'next-seo'
import cn from 'classnames'

import mdxInNextJs from './images/How-to-setup-MDX-in-Nextjs.jpg'
import { rootUrl } from '../../lib/constants'

const titlesToImages = {
  'How to setup MDX in Next.js': mdxInNextJs,
}

type Props = {
  title: string
  withSeo?: boolean
  className?: string
}

export const FeaturedImage = ({ title, withSeo, className }: Props) => {
  const imageSrc = titlesToImages[title]

  return imageSrc ? (
    <>
      {!!withSeo && (
        <NextSeo
          openGraph={{
            images: [
              {
                url: `${rootUrl}${imageSrc}`,
                width: 2048,
                height: 1152,
                alt: `Featured image for ${title}`,
              },
            ],
          }}
          twitter={{
            handle: '@jmagrippis',
            cardType: 'summary_large_image',
          }}
        />
      )}
      <img
        src={imageSrc}
        className={cn('sm:rounded shadow-lg max-w-full', className)}
      />
    </>
  ) : null
}
