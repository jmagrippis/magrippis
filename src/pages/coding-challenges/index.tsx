import { CodingChallenges } from 'components/CodingChallenges/CodingChallenges'
import { getFrontMatters } from 'lib/getFrontMatters'
import { CODING_CHALLENGES_PATH_PREFIX } from 'lib/mdx'

export const getStaticProps = () => ({
  props: { pages: getFrontMatters(`${CODING_CHALLENGES_PATH_PREFIX}**/*.mdx`) },
})

export default CodingChallenges
