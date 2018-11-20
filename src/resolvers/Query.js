const {
  getUserId
} = require('../utils')
// const {
//   prisma
// } = require('../generated/prisma-client')

const Query = {
  me: (parent, args, ctx) => {
    return ctx.db.user({
      id: getUserId(ctx)
    })
  },
  myStall: (parent, args, ctx) => {
    return ctx.db.user({
      id: getUserId(ctx)
    }).stall()
  },
  stalls: (parent, args, ctx, info) => {
    return ctx.binding.query.stalls({
      first: 20
    }, info)
  },
  // stalls: async (parent, args, ctx) => {
  //   const stalls = await ctx.db.stalls()
  //     .owner({
  //       id: parent.id
  //     })
  //   return stalls
  // },
  // stalls: async (parent, args, ctx, info) => {
  //   const query = `
  //     query {
  //       stalls {
  //         image
  //         w3w
  //         lng
  //         lat
  //         name
  //         description
  //         owner {
  //           name
  //           id
  //         }
  //         markets {
  //           name
  //           province {
  //             name
  //           }
  //           id
  //         }
  //       }
  //     }
  //   `
  //   // console.log("​ctx.db.client.request(query)", ctx.db.client.request(query))
  //   const result = await ctx.db.$graphql(
  //     String(info)
  //   )
  //   // return ctx.db.client.request(query)
  //   console.log("​ctx.db.$graphql(query)", result)
  //   return result
  // },
  myMarkets: (parent, args, ctx) => {
    return ctx.db.user({
      id: getUserId(ctx)
    }).stall().markets()
  },
  feed: (parent, args, ctx) => ctx.db.posts({
    where: {
      isPublished: true
    }
  }),
  drafts: (parent, args, ctx) =>
    ctx.db.posts({
      where: {
        isPublished: false
      }
    }),
  post: (parent, {
    id
  }, ctx) => ctx.db.post({
    id
  }),
  markets: (parent, args, ctx) => ctx.db.markets()
}

module.exports = {
  Query,
}