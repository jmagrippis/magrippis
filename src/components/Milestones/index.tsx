import { NextSeo } from 'next-seo'

import type { Milestone } from 'lib/repos/milestones/types'

import { getSeoProps } from '../getSeoProps'

import { Body } from './Body'

export type MilestonesProps = {
  milestones: Milestone[]
}

const description = 'Curated activity feed of what Johnny has been up to.'

const Milestones = ({ milestones }: MilestonesProps) => {
  const title = `Latest ${milestones.length} Milestones | jmagrippis`
  return (
    <>
      <NextSeo {...getSeoProps({ title, description })} />
      <Body milestones={milestones} />
    </>
  )
}

export default Milestones
