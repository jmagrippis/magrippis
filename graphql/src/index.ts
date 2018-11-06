import { ApolloServer } from 'apollo-server'
import { config } from 'dotenv'

import { typeDefs } from './typeDefs'
import { resolvers } from './resolvers'

config()

const engine = process.env.ENGINE_API_KEY
  ? {
      apiKey: process.env.ENGINE_API_KEY
    }
  : undefined

const apolloOptions = {
  typeDefs,
  resolvers,
  engine,
  introspection: true
}

const server = new ApolloServer(apolloOptions)

server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
