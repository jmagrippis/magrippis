import React, { ReactNode } from 'react'
import cn from 'classnames'

import { LinkOrPlainAnchor } from '../../LinkOrPlainAnchor'

export type HighlightType = {
  title: string
  imgSrc: string
  description: ReactNode[]
  link?: string
}

type Props = HighlightType & {
  className?: string
}

export const Highlight = ({
  title,
  imgSrc,
  description,
  className,
  link,
}: Props) => (
  <section className={className}>
    <div className="container m-auto p-8 grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">
      <div className="col-span-2 sm:col-span-2">
        {link ? (
          <LinkOrPlainAnchor href={link}>
            <img src={imgSrc} className="rounded shadow-lg" />
          </LinkOrPlainAnchor>
        ) : (
          <img src={imgSrc} className="rounded shadow-lg" />
        )}
      </div>

      <div className="col-span-1">
        <div className="text-3xl  mb-4">
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
