import { NextSeo } from 'next-seo'

import { Notice } from '../Notice/Notice'
import { getSeoProps } from '../getSeoProps'

import { PostSnippet } from './PostSnippet'

import { ParsedFrontMatter } from '*.mdx'

const title = 'Blog | jmagrippis'
const description =
  'Johnny’s thoughts on software engineering, travelling, photography and many more subjects, in written form!'

type Props = { pages: ParsedFrontMatter[] }

export const Blog = ({ pages }: Props) => (
  <>
    <NextSeo {...getSeoProps({ title, description })} />
    <div className="bg-prism flex-grow flex justify-center">
      <main className="text-lg max-w-readability-lg py-4">
        <h1 className="text-4xl p-4">Blog</h1>
        <ul className="mb-8 bg-white rounded shadow max-w-full">
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
