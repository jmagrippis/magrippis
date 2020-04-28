import React from 'react'
import Link from 'next/link'
import moment from 'moment'

import { FeaturedImage } from './FeaturedImage'
import { FrontMatter } from '../../layouts'

const formatPath = (p: string) => p.replace(/\.mdx$/, '')

type Props = FrontMatter & {
  __resourcePath: string
}

export const PostSnippet = ({
  title,
  snippet,
  tags,
  timestamp,
  __resourcePath,
}: Props) => (
  <li
    className="cursor-pointer sm:p-4 border-l border-purple-200 hover:border-purple-300 transition duration-300"
    key={__resourcePath}
  >
    <Link href={formatPath(__resourcePath)}>
      <a className="sm:grid sm:grid-cols-3 sm:gap-8">
        <FeaturedImage title={title} />
        <div className="p-4 sm:p-0 sm:col-span-2">
          <h2 className="text-2xl underline mb-2">{title}</h2>
          <p className="mb-4">{snippet}</p>
          <div className="flex flex-col sm:flex-row justify-between text-sm text-right">
            <div className="mb-4 sm:mb-0">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-purple-900 p-2 mr-2 rounded shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span>{moment(timestamp).fromNow()}</span>
          </div>
        </div>
      </a>
    </Link>
  </li>
)
