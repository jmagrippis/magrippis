import React, { ReactNode } from 'react'
import cn from 'classnames'
import { NextSeo } from 'next-seo'

import styles from './mdx.module.css'
import { FeaturedImage } from '../components/blog/FeaturedImage'

export type FrontMatter = {
  title: string
  snippet: string
  timestamp: number
  tags: string[]
}

export default ({ title, snippet }: FrontMatter) => ({
  children,
}: {
  children: ReactNode
}) => (
  <>
    <NextSeo title={`${title} | jmagrippis`} description={snippet} />
    <div
      className={cn(
        'w-full py-4 sm:text-lg max-w-readability-lg',
        styles.container
      )}
    >
      <h1 className="px-4 mb-2">{title}</h1>
      <p className="px-4 text-xl mb-6">{snippet}</p>
      <FeaturedImage title={title} withSeo className="mb-6" />
      <section className="px-4">{children}</section>
    </div>
  </>
)
