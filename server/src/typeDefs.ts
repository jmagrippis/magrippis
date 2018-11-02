import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Project {
    name: String!
    description: String!
  }

  type Query {
    projects: [Project]
  }
`
