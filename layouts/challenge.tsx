import React, { ReactNode } from 'react'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import cn from 'classnames'

import styles from './mdx.module.css'
import { Notice } from '../components/Notice/Notice'
import { getSeoProps } from '../components/getSeoProps'

export type FrontMatter = {
  title: string
  snippet: string
  timestamp: number
  tags: string[]
}

const ChallengeLayout = ({ title, snippet }: FrontMatter) => ({
  children,
}: {
  children: ReactNode
}) => (
  <>
    <NextSeo
      {...getSeoProps({
        title: `${title} | jmagrippis`,
        description: snippet,
      })}
    />
    <div className="bg-prism">
      <main
        className={cn(
          'm-auto py-4 sm:text-lg max-w-readability-lg',
          styles.container
        )}
      >
        <h1 className="px-4 mb-2">{title}</h1>
        <p className="px-4 text-xl mb-6">{snippet}</p>
        <section className="px-4 mb-4">{children}</section>
        <div className="px-4">
          <Link href="/coding-challenges">
            <Notice>
              Check out{' '}
              <span className="underline text-purple-600">
                all coding challenges
              </span>
            </Notice>
          </Link>
        </div>
      </main>
    </div>
  </>
)

export default ChallengeLayout
