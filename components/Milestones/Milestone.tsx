import React, { ReactNode } from 'react'
import moment from 'moment'
import cn from 'classnames'

import githubIcon from '../github-mark.svg'
import openInNewIcon from './open-in-new.svg'

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
        <h2 className="text-2xl">{title}</h2>
        <span className="border-l border-teal-200 mx-4 px-4 text-sm">
          {moment(timestamp).fromNow()}
        </span>
      </div>
      <div style={{ maxWidth: '80ch' }}>{description}</div>
    </div>
    {github || href ? (
      <aside className="text-purple-200 flex">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <img
              src={githubIcon}
              alt="see the source code in a new tab"
              className="w-16 p-1"
            />
          </a>
        )}
        {href && (
          <a href={href} target="_blank" rel="noopener noreferrer">
            <img
              src={openInNewIcon}
              alt="see milestone in a new tab"
              className="w-16"
            />
          </a>
        )}
      </aside>
    ) : null}
  </li>
)
