const {
  hash,
  compare
} = require('bcrypt')
const {
  sign
} = require('jsonwebtoken')
const {
  APP_SECRET,
  getUserId
} = require('../utils')

const Mutation = {
  createStallHolder: async (parent, {
    stall,
    profile
  }, ctx) => {
    const userId = getUserId(ctx)
    return ctx.db.updateUser({
      where: {
        id: userId
      },
      data: {
        role: "StallHolder",
        cell: profile.cell,
        image: profile.image,
        publicEmail: profile.publicEmail,
        publicName: profile.publicName,
        bio: profile.bio,
        stall: {
          create: {
            name: stall.name,
            lng: stall.lng,
            lat: stall.lat,
            image: stall.image,
            w3w: stall.w3w,
            description: stall.description,
            markets: {
              connect: {
                name: stall.market
              }
            }
          }
        }
      }
    })
  },


  createMarket: async (parent, {
    name,
    province
  }, ctx) => {
    return ctx.db.createMarket({
      name,
      province: {
        connect: {
          name: province
        }
      }
    })
  },

  // TODO: solve issue of routing from StallDatail to MyStall

  createProduct: async (parent, {
    input
  }, ctx) => {
    return ctx.db.createProduct({
      name: input.name,
      image: input.image,
      description: input.description,
      measurementUnit: input.measurementUnit,
      unitsPerItem: input.unitsPerItem,
      pricePerItem: input.pricePerItem,
      stall: {
        connect: {
          id: input.stallId
        }
      }
    })
  },

  authorize: async (parent, {
    email,
    authId,
    name
  }, ctx) => {
    const user = await ctx.db.user({
      email
    })
    const password = name + "abracadabra" + email
    const hashedPassword = await hash(password, 10)
    if (!user) {
      const user = await ctx.db.createUser({
        name,
        email,
        password: hashedPassword
      })

      return {
        token: sign({
          userId: user.id
        }, APP_SECRET),
        user,
      }
    } else {
      // TODO Find out what's wrong below
      // const valid = await compare(password, user.password)

      // if (!valid) {
      //   throw new Error('Invalid password')
      // }

      return {
        token: sign({
          userId: user.id
        }, APP_SECRET),
        user,
      }
    }

  },

  signup: async (parent, {
    name,
    email,
    password
  }, ctx) => {
    const hashedPassword = await hash(password, 10)
    const user = await ctx.db.createUser({
      name,
      email,
      password: hashedPassword,
    })

    return {
      token: sign({
        userId: user.id
      }, APP_SECRET),
      user,
    }
  },
  login: async (parent, {
    email,
    password
  }, ctx) => {
    const user = await ctx.db.user({
      email
    })

    if (!user) {
      throw new Error(`No user found for email: ${email}`)
    }

    const valid = await compare(password, user.password)

    if (!valid) {
      throw new Error('Invalid password')
    }

    return {
      token: sign({
        userId: user.id
      }, APP_SECRET),
      user,
    }
  },
  createDraft: async (parent, {
    title,
    content,
    authorEmail
  }, ctx) => {
    return ctx.db.createPost({
      title,
      content,
      author: {
        connect: {
          email: authorEmail
        }
      },
    })
  },

  deletePost: async (parent, {
    id
  }, ctx) => {
    const userId = getUserId(ctx)
    const author = await ctx.db
      .post({
        id
      })
      .author()
      .$fragment('{ id }')
    const authorId = author.id

    if (userId !== authorId) {
      throw new Error('Author Invalid')
    }

    return ctx.db.deletePost({
      id
    })
  },

  publish: async (parent, {
    id
  }, ctx) => {
    return ctx.db.updatePost({
      where: {
        id
      },
      data: {
        isPublished: true
      },
    })
  },
}

module.exports = {
  Mutation,
}