import React from 'react'
import { NextSeo } from 'next-seo'

import { frontMatter as timestampsWithLuxon } from '../../pages/blog/2020/human-readable-timestamps-with-Luxon.mdx'
import { frontMatter as mdxInNext } from '../../pages/blog/2020/how-to-setup-MDX-in-Nextjs.mdx'
import { PostSnippet } from './PostSnippet'
import { Notice } from '../Notice/Notice'
import { getSeoProps } from '../getSeoProps'

const title = 'Blog | jmagrippis'
const description =
  'Johnny’s thoughts on software engineering, travelling, photography and many more subjects, in written form!'

const pages = [timestampsWithLuxon, mdxInNext]

export const Blog = () => (
  <>
    <NextSeo {...getSeoProps({ title, description })} />
    <div className="bg-prism flex-grow flex justify-center">
      <main className="text-lg max-w-readability-lg py-4">
        <h1 className="text-4xl p-4">Blog</h1>
        <ul className="mb-8 bg-white rounded shadow">
          {pages.map((page) => (
            <PostSnippet key={page.__resourcePath} {...page} />
          ))}
        </ul>
        <div className="px-4">
          <Notice
            href="https://medium.com/@jmagrippis"
            target="_blank"
            rel="noopener noreferrer"
          >
            Find more posts over at{' '}
            <span className="underline text-purple-600">Medium</span>
          </Notice>
        </div>
      </main>
    </div>
  </>
)
