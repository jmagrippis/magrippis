import React, { ReactNode } from 'react'
import Link from 'next/link'
import cn from 'classnames'

import { FrontMatter } from '*.mdx'
import styles from './mdx.module.css'
import { FeaturedImage } from '../components/blog/FeaturedImage'
import { Notice } from '../components/Notice/Notice'

const DefaultLayout = ({ title, snippet }: FrontMatter) => ({
  children,
}: {
  children: ReactNode
}) => (
  <div className="bg-prism">
    <main
      className={cn(
        'm-auto py-4 sm:text-lg max-w-readability-lg',
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
      <div className="px-4">
        <Link href="/blog">
          <Notice>
            Check out{' '}
            <span className="underline text-purple-600">all posts</span>
          </Notice>
        </Link>
      </div>
    </main>
  </div>
)

export default DefaultLayout
