import cn from 'classnames'

import { milestonesContent } from './milestonesContent'
import { Milestone } from './Milestone'

export const Body = () => (
  <main className="w-full flex-grow py-4 bg-prism">
    <div className="container p-4">
      <h1 className="text-4xl leading-normal mb-6">Milestones</h1>
      <ul className="border border-purple-400 rounded shadow-md bg-white">
        {milestonesContent.map(
          ({ title, description, accomplishedAt, href, github }, i) => (
            <Milestone
              key={title}
              title={title}
              description={description}
              accomplishedAt={accomplishedAt}
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
