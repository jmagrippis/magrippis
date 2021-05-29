import { serialize } from 'next-mdx-remote/serialize'
import matter from 'gray-matter'
import { glob } from 'glob'

import { BlogPost } from 'components/blog/BlogPost/BlogPost'
import { formatMdxPath } from 'lib/formatMdxPath'
import { BLOG_PATH_PREFIX, mdxOptions } from 'lib/mdx'

export async function getStaticPaths() {
  const paths = glob.sync(`${BLOG_PATH_PREFIX}**/*.mdx`)

  return {
    paths: paths.map((path) => {
      const slug = formatMdxPath(path).replace('blog/', '').split('/')
      return {
        params: { slug },
      }
    }),
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const { content, data } = matter.read(
    `${BLOG_PATH_PREFIX}${slug.join('/')}.mdx`
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

export default BlogPost
