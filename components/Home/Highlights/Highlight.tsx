import React, { ReactNode } from 'react'
import cn from 'classnames'

import { LinkOrPlainAnchor } from '../../LinkOrPlainAnchor'

export type HighlightType = {
  title: string
  imgSrc: string
  imgTitle: string
  description: ReactNode[]
  link?: string
  alternate?: boolean
}

type Props = HighlightType & {
  className?: string
}

export const Highlight = ({
  title,
  imgSrc,
  imgTitle,
  description,
  className,
  link,
  alternate,
}: Props) => (
  <section
    className={cn(className, {
      'bg-gray-100': !alternate,
    })}
  >
    <div className="container m-auto p-8 grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">
      <div className="col-span-2">
        {link ? (
          <LinkOrPlainAnchor href={link}>
            <img
              src={imgSrc}
              title={imgTitle}
              alt={imgTitle}
              className="rounded shadow-lg"
            />
          </LinkOrPlainAnchor>
        ) : (
          <img
            src={imgSrc}
            title={imgTitle}
            alt={imgTitle}
            className="rounded shadow-lg"
          />
        )}
      </div>

      <div
        className={cn({
          'sm:row-start-1': alternate,
        })}
      >
        <div className="text-3xl mb-4">
          {link ? (
            <LinkOrPlainAnchor href={link} className="underline">
              {title}
            </LinkOrPlainAnchor>
          ) : (
            title
          )}
        </div>
        {description.map((copy, i) => (
          <p
            // we will not be reordering these paragraphs...
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            className={cn({
              'mb-2': i + 1 !== description.length,
            })}
          >
            {copy}
          </p>
        ))}
      </div>
    </div>
  </section>
)
