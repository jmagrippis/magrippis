import dynamic from 'next/dynamic'
import hydrate from 'next-mdx-remote/hydrate'

import { FeaturedImage } from 'components/blog/FeaturedImage'
import { blogComponents } from 'lib/mdx'

import { ParsedFrontMatter } from '*.mdx'

type Props = {
  frontMatter: ParsedFrontMatter
  source: string
}

const BelowTheFold = dynamic(() => import('./BelowTheFold'))

export const BlogPost = ({
  frontMatter: { title, snippet, tags },
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
          <FeaturedImage title={title} description={snippet} withSeo />
          <section className="px-4 mb-4">{mdx}</section>
          <BelowTheFold title={title} tags={tags} />
        </article>
      </main>
    </div>
  )
}
