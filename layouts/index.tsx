import { ReactNode } from 'react'
import Link from 'next/link'

import { FrontMatter } from '*.mdx'
import { FeaturedImage } from '../components/blog/FeaturedImage'
import { Notice } from '../components/Notice/Notice'

type Props = {
  frontMatter: FrontMatter
  children: ReactNode
}

const DefaultLayout = ({
  frontMatter: { title, snippet },
  children,
}: Props) => (
  <div className="bg-prism">
    <main className="m-auto py-8 prose lg:prose-lg xl:prose-xl">
      <article>
        <div className="px-4">
          <h1>{title}</h1>
          <p className="text-xl lg:text-2xl">{snippet}</p>
        </div>
        <FeaturedImage
          title={title}
          description={snippet}
          withSeo
          className="pt-2 pb-8 lg:pb-12"
        />
        <section className="px-4 mb-4">{children}</section>
        <div className="px-4">
          <Link href="/blog" passHref>
            <Notice>
              Check out{' '}
              <span className="underline text-purple-600">all posts</span>
            </Notice>
          </Link>
        </div>
      </article>
    </main>
  </div>
)

export default DefaultLayout
