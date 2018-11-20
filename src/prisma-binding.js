const {
    Prisma
} = require('prisma-binding')
const {
    typeDefs
} = require('./generated/prisma-client/prisma-schema')

module.exports = {
    prismaBinding: new Prisma({
        typeDefs,
        endpoint: process.env.PRISMA_ENDPOINT,
        secret: process.env.PRISMA_SECRET
    }),
}