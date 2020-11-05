import glob from 'glob'
import matter from 'gray-matter'
import { orderBy } from 'lodash'

export const getFrontMatters = (globPattern: string) => {
  const paths = glob.sync(globPattern)

  return orderBy(
    paths.map((path) => {
      const { data } = matter.read(path)

      return {
        ...data,
        publishedAt: data.publishedAt.toISOString(),
        __resourcePath: path,
      }
    }),
    ['publishedAt'],
    ['desc']
  )
}
