const {
  getUserId
} = require('../utils')
// const {
//   prisma
// } = require('../generated/prisma-client')

const Query = {
  me: (parent, args, ctx, info) => {
    return ctx.db.user({
      id: getUserId(ctx)
    })
  },
  myStall: (parent, args, ctx) => {
    return ctx.db.user({
      id: getUserId(ctx)
    }).stall()
  },
  stallProducts: (parent, {
    stallId
  }, ctx) => {
    return ctx.db.products({
      where: {
        stall: {
          id: stallId
        }
      }
    })
  },
  stalls: (parent, args, ctx, info) => {
    return ctx.binding.query.stalls({
      first: 20
    }, info)
  },

  stall: (parent, args, ctx, info) => {
    return ctx.binding.query.stall({
      where: {
        id: args.stallId
      }
    }, info)
  },


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