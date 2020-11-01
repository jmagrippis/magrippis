import { ReactNode } from 'react'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import { FrontMatter } from '*.mdx'
import { Notice } from '../components/Notice/Notice'
import { getSeoProps } from '../components/getSeoProps'

type Props = {
  frontMatter: FrontMatter
  children: ReactNode
}

const ChallengeLayout = ({
  frontMatter: { title, snippet },
  children,
}: Props) => (
  <>
    <NextSeo
      {...getSeoProps({
        title: `${title} | jmagrippis`,
        description: snippet,
      })}
    />
    <div className="bg-prism">
      <main className="m-auto py-8 prose lg:prose-lg xl:prose-xl">
        <div className="px-4">
          <h1>{title}</h1>
          <p className="text-xl lg:text-2xl">{snippet}</p>
        </div>
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
