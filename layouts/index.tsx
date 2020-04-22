import React, { ReactNode } from 'react'
import Link from 'next/link'
import cn from 'classnames'

import styles from './mdx.module.css'
import { FeaturedImage } from '../components/blog/FeaturedImage'
import { Notice } from '../components/Notice/Notice'

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
    <div
      className={cn(
        'w-full py-4 sm:text-lg max-w-readability-lg',
        styles.container
      )}
    >
      <h1 className="px-4 mb-2">{title}</h1>
      <p className="px-4 text-xl mb-6">{snippet}</p>
      <FeaturedImage
        title={title}
        description={snippet}
        withSeo
        className="mb-6"
      />
      <section className="px-4 mb-4">{children}</section>
      <Link href="/blog">
        <Notice>
          Check out <span className="underline text-purple-600">all posts</span>
        </Notice>
      </Link>
    </div>
  </>
)
