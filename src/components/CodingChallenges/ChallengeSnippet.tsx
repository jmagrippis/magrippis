import Link from 'next/link'

import { formatMdxPath } from 'lib/formatMdxPath'
import { isoStringToRelativeTime } from 'lib/relativeTime'

import { FeaturedPreview } from './FeaturedPreview'

import { ParsedFrontMatter } from '*.mdx'

type Props = ParsedFrontMatter

export const ChallengeSnippet = ({
  title,
  snippet,
  tags,
  publishedAt,
  __resourcePath,
}: Props) => (
  <li
    className="cursor-pointer sm:p-4 border-l border-purple-200 hover:border-purple-300 transition duration-300"
    key={__resourcePath}
  >
    <article>
      <Link href={formatMdxPath(__resourcePath)}>
        <a className="sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="bg-gray-50 rounded shadow flex justify-center items-center p-1">
            <FeaturedPreview title={title} />
          </div>
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
              <span>{isoStringToRelativeTime(publishedAt)}</span>
            </div>
          </div>
        </a>
      </Link>
    </article>
  </li>
)
