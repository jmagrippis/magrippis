import rehypePrism from '@mapbox/rehype-prism'

import { Demonstration } from 'components/blog/Demonstration'
import { RelativeTimeDemo } from 'components/blog/RelativeTimeDemo/RelativeTimeDemo'
import { FeaturedPreview } from 'components/CodingChallenges/2020/CyclingElement/FeaturedPreview'
import { Video } from 'components/Video/Video'

export const BLOG_PATH_PREFIX = 'mdx/blog/'
export const CODING_CHALLENGES_PATH_PREFIX = 'mdx/coding-challenges/'

export const mdxOptions = { rehypePlugins: [rehypePrism] }

export const blogComponents = {
  Demonstration,
  RelativeTimeDemo,
}

export const challengeComponents = {
  FeaturedPreview,
  Video,
}
