import React from 'react'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import cn from 'classnames'

import { rootUrl } from '../../lib/constants'
import { getSeoProps } from '../getSeoProps'
import { getImageSrc } from './getImageSrc'

type Props = {
  title: string
  description?: string
  withSeo?: boolean
  className?: string
}

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
      <div className={cn('max-w-full w-screen', className)}>
        <Image
          src={imageSrc}
          width={2048}
          height={1152}
          className="sm:rounded shadow-lg"
          alt={`hero of "${title}"`}
        />
      </div>
    </>
  ) : null
}
