import { GetStaticProps } from 'next'

import Milestones, { MilestonesProps } from 'components/Milestones'
import { milestonesRepo } from 'lib/repos/milestones/Airtable'

const FIVE_MINUTES = 5 * 60

export const getStaticProps: GetStaticProps<MilestonesProps> = async () => {
  const milestones = await milestonesRepo.latest()

  return {
    props: {
      milestones,
    },
    revalidate: FIVE_MINUTES,
  }
}

export default Milestones
