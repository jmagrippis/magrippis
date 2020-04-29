import React from 'react'
import cn from 'classnames'

import { milestonesContent } from './milestonesContent'
import { Milestone } from './Milestone'

export const Body = () => (
  <main className="w-full flex-grow py-4 bg-prism">
    <div className="container m-auto p-4">
      <h1 className="text-4xl mb-6">Milestones</h1>
      <ul className="border border-purple-400 rounded shadow-md bg-white">
        {milestonesContent.map(
          ({ title, description, timestamp, href, github }, i) => (
            <Milestone
              key={title}
              title={title}
              description={description}
              timestamp={timestamp}
              href={href}
              github={github}
              className={cn({
                'border-b border-purple-200':
                  i + 1 !== milestonesContent.length,
              })}
            />
          )
        )}
      </ul>
    </div>
  </main>
)
