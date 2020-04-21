import React, { ReactNode } from 'react'
import moment from 'moment'
import cn from 'classnames'

import GithubIcon from '../github-mark.svg'
import OpenInNewIcon from './open-in-new.svg'

export type MilestoneType = {
  title: string
  timestamp: number
  description: ReactNode
  github?: string
  href?: string
}

type Props = MilestoneType & { className?: string }

export const Milestone = ({
  title,
  timestamp,
  description,
  github,
  href,
  className,
}: Props) => (
  <li
    className={cn(
      'p-4 border border-teal-200 flex flex-col sm:flex-row items-center justify-between',
      className
    )}
  >
    <div className="mb-4 sm:mb-0">
      <div className="flex flex-col sm:flex-row items-center mb-2">
        <h2 className="text-2xl border-b border-teal-200 sm:border-none">
          {title}
        </h2>
        <span className="sm:border-l border-teal-200 mx-4 px-4 text-sm">
          {moment(timestamp).fromNow()}
        </span>
      </div>
      <div className="max-w-readability-lg">{description}</div>
    </div>
    {github || href ? (
      <aside className="text-teal-500 flex">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <GithubIcon
              title="see the source code in a new tab"
              className="transition duration-300 hover:text-teal-700 w-16 p-1"
            />
          </a>
        )}
        {href && (
          <a href={href} target="_blank" rel="noopener noreferrer">
            <OpenInNewIcon
              title="see milestone in a new tab"
              className="transition duration-300 hover:text-teal-700 w-16"
            />
          </a>
        )}
      </aside>
    ) : null}
  </li>
)
