import React from 'react'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import cn from 'classnames'

import { rootUrl } from '../../lib/constants'
import { getSeoProps } from '../getSeoProps'

type Props = {
  title: string
  description?: string
  withSeo?: boolean
  className?: string
}

export const getImageSrc = (title: string) =>
  `/images/blog/${title.replace(/ /g, '-').replace(/\./g, '')}.jpg`

export const FeaturedImage = ({
  title,
  description,
  withSeo,
  className,
}: Props) => {
  const imageSrc = getImageSrc(title)

  return imageSrc ? (
    <>
      {!!withSeo && (
        <NextSeo
          {...getSeoProps({
            title: `${title} | jmagrippis`,
            description,
            openGraph: {
              images: [
                {
                  url: `${rootUrl}${imageSrc}`,
                  width: 2048,
                  height: 1152,
                  alt: `Featured image for ${title}`,
                },
              ],
            },
            twitter: {
              cardType: 'summary_large_image',
            },
          })}
        />
      )}
      <Image
        src={imageSrc}
        width={2048}
        height={1152}
        className={cn('sm:rounded shadow-lg max-w-full', className)}
        alt={`hero of "${title}"`}
      />
    </>
  ) : null
}
