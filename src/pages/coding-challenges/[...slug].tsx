import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter'
import { glob } from 'glob'

import { Challenge } from 'components/CodingChallenges/Challenge'
import { formatMdxPath } from 'lib/formatMdxPath'
import { CODING_CHALLENGES_PATH_PREFIX, mdxOptions } from 'lib/mdx'

export async function getStaticPaths() {
  const paths = glob.sync(`${CODING_CHALLENGES_PATH_PREFIX}**/*.mdx`)

  return {
    paths: paths.map((path) => {
      const slug = formatMdxPath(path)
        .replace('coding-challenges/', '')
        .split('/')
      return {
        params: { slug },
      }
    }),
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const { content, data } = matter.read(
    `${CODING_CHALLENGES_PATH_PREFIX}${slug.join('/')}.mdx`
  )
  const frontMatter = {
    ...data,
    publishedAt: data.publishedAt.toISOString(),
  }
  const mdxSource = await serialize(content, {
    scope: frontMatter,
    mdxOptions,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter,
    },
  }
}

export default Challenge
