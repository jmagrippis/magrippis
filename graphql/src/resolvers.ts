import { keywords } from './keywords'

export const resolvers = {
  Query: {
    keywords: () => keywords,
    keyword: (_, args) => keywords.find(({ name }) => name === args.name)
  }
}
