import Link from 'next/link'

import { ParsedFrontMatter } from '*.mdx'
import { FeaturedImage } from './FeaturedImage'
import { formatMdxPath } from 'lib/formatMdxPath'
import { isoStringToRelativeTime } from 'lib/relativeTime'

type Props = ParsedFrontMatter

export const PostSnippet = ({
  title,
  snippet,
  tags,
  publishedAt,
  __resourcePath,
}: Props) => (
  <li
    className="cursor-pointer even:bg-gray-100 sm:p-4 sm:border-l first:rounded-tl last:first:rounded-bl border-purple-200 hover:border-purple-300 transition duration-300"
    key={__resourcePath}
  >
    <article>
      <Link href={formatMdxPath(__resourcePath)}>
        <a className="sm:grid sm:grid-cols-3 sm:gap-8">
          <FeaturedImage title={title} className="sm:m-auto" />
          <div className="p-4 sm:p-0 sm:col-span-2">
            <h2 className="text-2xl underline mb-2">{title}</h2>
            <p className="mb-4">{snippet}</p>
            <div className="flex flex-col sm:flex-row justify-between text-sm text-right">
              <div className="mb-4 sm:mb-0">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-purple-100 text-purple-900 p-2 mr-2 rounded shadow-sm"
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
