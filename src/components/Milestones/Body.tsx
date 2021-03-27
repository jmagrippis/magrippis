import { Milestone as MilestoneType } from 'lib/repos/milestones/types'
import { Milestone } from './Milestone'

type Props = {
  milestones: MilestoneType[]
}
export const Body = ({ milestones }: Props) => (
  <main className="w-full flex-grow py-4 bg-prism">
    <div className="container p-4">
      <h1 className="text-4xl leading-normal mb-6">Milestones</h1>
      <ul className="border border-purple-400 rounded shadow-md bg-white divide-y divide-purple-100 ">
        {milestones.map(
          ({ title, description, accomplishedAt, href, github }) => (
            <Milestone
              key={title}
              title={title}
              description={description}
              accomplishedAt={accomplishedAt}
              href={href}
              github={github}
            />
          )
        )}
      </ul>
    </div>
  </main>
)
