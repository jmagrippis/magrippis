import Link from 'next/link'
import hydrate from 'next-mdx-remote/hydrate'
import { NextSeo } from 'next-seo'

import { getSeoProps } from 'components/getSeoProps'
import { challengeComponents } from 'lib/mdx'

import { Notice } from '../Notice/Notice'

import { ParsedFrontMatter } from '*.mdx'

type Props = {
  frontMatter: ParsedFrontMatter
  source: string
}

export const Challenge = ({
  frontMatter: { title, snippet },
  source,
}: Props) => {
  const mdx = hydrate(source, { components: challengeComponents })

  return (
    <>
      <NextSeo
        {...getSeoProps({
          title: `${title} | jmagrippis`,
          description: snippet,
        })}
      />
      <div className="bg-prism">
        <main className="m-auto py-8 prose lg:prose-lg xl:prose-xl">
          <article>
            <div className="px-4">
              <h1>{title}</h1>
              <p className="text-xl lg:text-2xl">{snippet}</p>
            </div>
            <section className="px-4 mb-4">{mdx}</section>
            <div className="px-4">
              <Link href="/coding-challenges" passHref>
                <Notice>
                  Check out{' '}
                  <span className="underline text-purple-600">
                    all coding challenges
                  </span>
                </Notice>
              </Link>
            </div>
          </article>
        </main>
      </div>
    </>
  )
}
