import { Blog } from 'components/blog/Blog'
import { getFrontMatters } from 'lib/getFrontMatters'
import { BLOG_PATH_PREFIX } from 'lib/mdx'

export const getStaticProps = () => ({
  props: { pages: getFrontMatters(`${BLOG_PATH_PREFIX}**/*.mdx`) },
})

export default Blog
