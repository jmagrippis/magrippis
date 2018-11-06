import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Keyword {
    name: String!
    description: String!
    category: String!
  }

  type Query {
    keywords: [Keyword]
    keyword(name: String!): Keyword
  }
`
