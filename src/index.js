const {
  GraphQLServer
} = require('graphql-yoga')
const {
  prisma
} = require('./generated/prisma-client')
const {
  resolvers
} = require('./resolvers')
const {
  permissions
} = require('./permissions')

const {
  prismaBinding
} = require('./prisma-binding')

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  // middlewares: [permissions],
  context: request => {
    return {
      ...request,
      db: prisma,
      binding: prismaBinding
    }
  },
})

server.start(() => console.log('Server is running'))