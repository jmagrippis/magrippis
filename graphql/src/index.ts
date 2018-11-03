import { ApolloServer } from 'apollo-server'
import { config } from 'dotenv'

import { typeDefs } from './typeDefs'
import { resolvers } from './resolvers'

config()

const apolloOptions = {
  typeDefs,
  resolvers,
  introspection: true,
  engine: {
    apiKey: process.env.ENGINE_API_KEY
  }
}

const server = new ApolloServer(apolloOptions)

server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
