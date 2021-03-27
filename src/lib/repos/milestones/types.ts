export type Milestone = {
  title: string
  accomplishedAt: string
  description: string
  github?: string
  href?: string
}

export interface MilestonesInterface {
  latest: () => Promise<Milestone[]>
}
