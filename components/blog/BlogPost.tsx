import Link from 'next/link'
import hydrate from 'next-mdx-remote/hydrate'

import { ParsedFrontMatter } from '*.mdx'
import { FeaturedImage } from '../../components/blog/FeaturedImage'
import { Notice } from '../../components/Notice/Notice'
import { blogComponents } from '../../mdx/constants'

type Props = {
  frontMatter: ParsedFrontMatter
  source: string
}

export const BlogPost = ({
  frontMatter: { title, snippet },
  source,
}: Props) => {
  const mdx = hydrate(source, { components: blogComponents })

  return (
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
          <section className="px-4 mb-4">{mdx}</section>
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
}
