module.exports = {
        typeDefs: /* GraphQL */ `type AggregateMarket {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateProvince {
  count: Int!
}

type AggregateStall {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Market {
  id: ID!
  name: String!
  province: Province
  stalls(where: StallWhereInput, orderBy: StallOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stall!]
}

type MarketConnection {
  pageInfo: PageInfo!
  edges: [MarketEdge]!
  aggregate: AggregateMarket!
}

input MarketCreateInput {
  name: String!
  province: ProvinceCreateOneWithoutMarketsInput
  stalls: StallCreateManyWithoutMarketsInput
}

input MarketCreateManyWithoutProvinceInput {
  create: [MarketCreateWithoutProvinceInput!]
  connect: [MarketWhereUniqueInput!]
}

input MarketCreateManyWithoutStallsInput {
  create: [MarketCreateWithoutStallsInput!]
  connect: [MarketWhereUniqueInput!]
}

input MarketCreateWithoutProvinceInput {
  name: String!
  stalls: StallCreateManyWithoutMarketsInput
}

input MarketCreateWithoutStallsInput {
  name: String!
  province: ProvinceCreateOneWithoutMarketsInput
}

type MarketEdge {
  node: Market!
  cursor: String!
}

enum MarketOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MarketPreviousValues {
  id: ID!
  name: String!
}

type MarketSubscriptionPayload {
  mutation: MutationType!
  node: Market
  updatedFields: [String!]
  previousValues: MarketPreviousValues
}

input MarketSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MarketWhereInput
  AND: [MarketSubscriptionWhereInput!]
  OR: [MarketSubscriptionWhereInput!]
  NOT: [MarketSubscriptionWhereInput!]
}

input MarketUpdateInput {
  name: String
  province: ProvinceUpdateOneWithoutMarketsInput
  stalls: StallUpdateManyWithoutMarketsInput
}

input MarketUpdateManyMutationInput {
  name: String
}

input MarketUpdateManyWithoutProvinceInput {
  create: [MarketCreateWithoutProvinceInput!]
  delete: [MarketWhereUniqueInput!]
  connect: [MarketWhereUniqueInput!]
  disconnect: [MarketWhereUniqueInput!]
  update: [MarketUpdateWithWhereUniqueWithoutProvinceInput!]
  upsert: [MarketUpsertWithWhereUniqueWithoutProvinceInput!]
}

input MarketUpdateManyWithoutStallsInput {
  create: [MarketCreateWithoutStallsInput!]
  delete: [MarketWhereUniqueInput!]
  connect: [MarketWhereUniqueInput!]
  disconnect: [MarketWhereUniqueInput!]
  update: [MarketUpdateWithWhereUniqueWithoutStallsInput!]
  upsert: [MarketUpsertWithWhereUniqueWithoutStallsInput!]
}

input MarketUpdateWithoutProvinceDataInput {
  name: String
  stalls: StallUpdateManyWithoutMarketsInput
}

input MarketUpdateWithoutStallsDataInput {
  name: String
  province: ProvinceUpdateOneWithoutMarketsInput
}

input MarketUpdateWithWhereUniqueWithoutProvinceInput {
  where: MarketWhereUniqueInput!
  data: MarketUpdateWithoutProvinceDataInput!
}

input MarketUpdateWithWhereUniqueWithoutStallsInput {
  where: MarketWhereUniqueInput!
  data: MarketUpdateWithoutStallsDataInput!
}

input MarketUpsertWithWhereUniqueWithoutProvinceInput {
  where: MarketWhereUniqueInput!
  update: MarketUpdateWithoutProvinceDataInput!
  create: MarketCreateWithoutProvinceInput!
}

input MarketUpsertWithWhereUniqueWithoutStallsInput {
  where: MarketWhereUniqueInput!
  update: MarketUpdateWithoutStallsDataInput!
  create: MarketCreateWithoutStallsInput!
}

input MarketWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  province: ProvinceWhereInput
  stalls_every: StallWhereInput
  stalls_some: StallWhereInput
  stalls_none: StallWhereInput
  AND: [MarketWhereInput!]
  OR: [MarketWhereInput!]
  NOT: [MarketWhereInput!]
}

input MarketWhereUniqueInput {
  id: ID
}

type Mutation {
  createMarket(data: MarketCreateInput!): Market!
  updateMarket(data: MarketUpdateInput!, where: MarketWhereUniqueInput!): Market
  updateManyMarkets(data: MarketUpdateManyMutationInput!, where: MarketWhereInput): BatchPayload!
  upsertMarket(where: MarketWhereUniqueInput!, create: MarketCreateInput!, update: MarketUpdateInput!): Market!
  deleteMarket(where: MarketWhereUniqueInput!): Market
  deleteManyMarkets(where: MarketWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createProvince(data: ProvinceCreateInput!): Province!
  updateProvince(data: ProvinceUpdateInput!, where: ProvinceWhereUniqueInput!): Province
  updateManyProvinces(data: ProvinceUpdateManyMutationInput!, where: ProvinceWhereInput): BatchPayload!
  upsertProvince(where: ProvinceWhereUniqueInput!, create: ProvinceCreateInput!, update: ProvinceUpdateInput!): Province!
  deleteProvince(where: ProvinceWhereUniqueInput!): Province
  deleteManyProvinces(where: ProvinceWhereInput): BatchPayload!
  createStall(data: StallCreateInput!): Stall!
  updateStall(data: StallUpdateInput!, where: StallWhereUniqueInput!): Stall
  updateManyStalls(data: StallUpdateManyMutationInput!, where: StallWhereInput): BatchPayload!
  upsertStall(where: StallWhereUniqueInput!, create: StallCreateInput!, update: StallUpdateInput!): Stall!
  deleteStall(where: StallWhereUniqueInput!): Stall
  deleteManyStalls(where: StallWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Post {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  title: String!
  content: String!
  author: User!
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  isPublished: Boolean
  title: String!
  content: String!
  author: UserCreateOneWithoutPostsInput!
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutAuthorInput {
  isPublished: Boolean
  title: String!
  content: String!
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  isPublished_ASC
  isPublished_DESC
  title_ASC
  title_DESC
  content_ASC
  content_DESC
}

type PostPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  title: String!
  content: String!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  isPublished: Boolean
  title: String
  content: String
  author: UserUpdateOneRequiredWithoutPostsInput
}

input PostUpdateManyMutationInput {
  isPublished: Boolean
  title: String
  content: String
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
}

input PostUpdateWithoutAuthorDataInput {
  isPublished: Boolean
  title: String
  content: String
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  isPublished: Boolean
  isPublished_not: Boolean
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  author: UserWhereInput
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Province {
  id: ID!
  name: String!
  markets(where: MarketWhereInput, orderBy: MarketOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Market!]
}

type ProvinceConnection {
  pageInfo: PageInfo!
  edges: [ProvinceEdge]!
  aggregate: AggregateProvince!
}

input ProvinceCreateInput {
  name: String!
  markets: MarketCreateManyWithoutProvinceInput
}

input ProvinceCreateOneWithoutMarketsInput {
  create: ProvinceCreateWithoutMarketsInput
  connect: ProvinceWhereUniqueInput
}

input ProvinceCreateWithoutMarketsInput {
  name: String!
}

type ProvinceEdge {
  node: Province!
  cursor: String!
}

enum ProvinceOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProvincePreviousValues {
  id: ID!
  name: String!
}

type ProvinceSubscriptionPayload {
  mutation: MutationType!
  node: Province
  updatedFields: [String!]
  previousValues: ProvincePreviousValues
}

input ProvinceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProvinceWhereInput
  AND: [ProvinceSubscriptionWhereInput!]
  OR: [ProvinceSubscriptionWhereInput!]
  NOT: [ProvinceSubscriptionWhereInput!]
}

input ProvinceUpdateInput {
  name: String
  markets: MarketUpdateManyWithoutProvinceInput
}

input ProvinceUpdateManyMutationInput {
  name: String
}

input ProvinceUpdateOneWithoutMarketsInput {
  create: ProvinceCreateWithoutMarketsInput
  update: ProvinceUpdateWithoutMarketsDataInput
  upsert: ProvinceUpsertWithoutMarketsInput
  delete: Boolean
  disconnect: Boolean
  connect: ProvinceWhereUniqueInput
}

input ProvinceUpdateWithoutMarketsDataInput {
  name: String
}

input ProvinceUpsertWithoutMarketsInput {
  update: ProvinceUpdateWithoutMarketsDataInput!
  create: ProvinceCreateWithoutMarketsInput!
}

input ProvinceWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  markets_every: MarketWhereInput
  markets_some: MarketWhereInput
  markets_none: MarketWhereInput
  AND: [ProvinceWhereInput!]
  OR: [ProvinceWhereInput!]
  NOT: [ProvinceWhereInput!]
}

input ProvinceWhereUniqueInput {
  id: ID
}

type Query {
  market(where: MarketWhereUniqueInput!): Market
  markets(where: MarketWhereInput, orderBy: MarketOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Market]!
  marketsConnection(where: MarketWhereInput, orderBy: MarketOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MarketConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  province(where: ProvinceWhereUniqueInput!): Province
  provinces(where: ProvinceWhereInput, orderBy: ProvinceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Province]!
  provincesConnection(where: ProvinceWhereInput, orderBy: ProvinceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProvinceConnection!
  stall(where: StallWhereUniqueInput!): Stall
  stalls(where: StallWhereInput, orderBy: StallOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stall]!
  stallsConnection(where: StallWhereInput, orderBy: StallOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StallConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Stall {
  id: ID!
  lng: String!
  lat: String!
  name: String
  description: String
  owner: User!
  markets(where: MarketWhereInput, orderBy: MarketOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Market!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type StallConnection {
  pageInfo: PageInfo!
  edges: [StallEdge]!
  aggregate: AggregateStall!
}

input StallCreateInput {
  lng: String!
  lat: String!
  name: String
  description: String
  owner: UserCreateOneWithoutStallInput!
  markets: MarketCreateManyWithoutStallsInput
}

input StallCreateManyWithoutMarketsInput {
  create: [StallCreateWithoutMarketsInput!]
  connect: [StallWhereUniqueInput!]
}

input StallCreateOneWithoutOwnerInput {
  create: StallCreateWithoutOwnerInput
  connect: StallWhereUniqueInput
}

input StallCreateWithoutMarketsInput {
  lng: String!
  lat: String!
  name: String
  description: String
  owner: UserCreateOneWithoutStallInput!
}

input StallCreateWithoutOwnerInput {
  lng: String!
  lat: String!
  name: String
  description: String
  markets: MarketCreateManyWithoutStallsInput
}

type StallEdge {
  node: Stall!
  cursor: String!
}

enum StallOrderByInput {
  id_ASC
  id_DESC
  lng_ASC
  lng_DESC
  lat_ASC
  lat_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type StallPreviousValues {
  id: ID!
  lng: String!
  lat: String!
  name: String
  description: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type StallSubscriptionPayload {
  mutation: MutationType!
  node: Stall
  updatedFields: [String!]
  previousValues: StallPreviousValues
}

input StallSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StallWhereInput
  AND: [StallSubscriptionWhereInput!]
  OR: [StallSubscriptionWhereInput!]
  NOT: [StallSubscriptionWhereInput!]
}

input StallUpdateInput {
  lng: String
  lat: String
  name: String
  description: String
  owner: UserUpdateOneRequiredWithoutStallInput
  markets: MarketUpdateManyWithoutStallsInput
}

input StallUpdateManyMutationInput {
  lng: String
  lat: String
  name: String
  description: String
}

input StallUpdateManyWithoutMarketsInput {
  create: [StallCreateWithoutMarketsInput!]
  delete: [StallWhereUniqueInput!]
  connect: [StallWhereUniqueInput!]
  disconnect: [StallWhereUniqueInput!]
  update: [StallUpdateWithWhereUniqueWithoutMarketsInput!]
  upsert: [StallUpsertWithWhereUniqueWithoutMarketsInput!]
}

input StallUpdateOneWithoutOwnerInput {
  create: StallCreateWithoutOwnerInput
  update: StallUpdateWithoutOwnerDataInput
  upsert: StallUpsertWithoutOwnerInput
  delete: Boolean
  disconnect: Boolean
  connect: StallWhereUniqueInput
}

input StallUpdateWithoutMarketsDataInput {
  lng: String
  lat: String
  name: String
  description: String
  owner: UserUpdateOneRequiredWithoutStallInput
}

input StallUpdateWithoutOwnerDataInput {
  lng: String
  lat: String
  name: String
  description: String
  markets: MarketUpdateManyWithoutStallsInput
}

input StallUpdateWithWhereUniqueWithoutMarketsInput {
  where: StallWhereUniqueInput!
  data: StallUpdateWithoutMarketsDataInput!
}

input StallUpsertWithoutOwnerInput {
  update: StallUpdateWithoutOwnerDataInput!
  create: StallCreateWithoutOwnerInput!
}

input StallUpsertWithWhereUniqueWithoutMarketsInput {
  where: StallWhereUniqueInput!
  update: StallUpdateWithoutMarketsDataInput!
  create: StallCreateWithoutMarketsInput!
}

input StallWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  lng: String
  lng_not: String
  lng_in: [String!]
  lng_not_in: [String!]
  lng_lt: String
  lng_lte: String
  lng_gt: String
  lng_gte: String
  lng_contains: String
  lng_not_contains: String
  lng_starts_with: String
  lng_not_starts_with: String
  lng_ends_with: String
  lng_not_ends_with: String
  lat: String
  lat_not: String
  lat_in: [String!]
  lat_not_in: [String!]
  lat_lt: String
  lat_lte: String
  lat_gt: String
  lat_gte: String
  lat_contains: String
  lat_not_contains: String
  lat_starts_with: String
  lat_not_starts_with: String
  lat_ends_with: String
  lat_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  owner: UserWhereInput
  markets_every: MarketWhereInput
  markets_some: MarketWhereInput
  markets_none: MarketWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [StallWhereInput!]
  OR: [StallWhereInput!]
  NOT: [StallWhereInput!]
}

input StallWhereUniqueInput {
  id: ID
  name: String
}

type Subscription {
  market(where: MarketSubscriptionWhereInput): MarketSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  province(where: ProvinceSubscriptionWhereInput): ProvinceSubscriptionPayload
  stall(where: StallSubscriptionWhereInput): StallSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  createdAt: DateTime!
  updatedAt: DateTime!
  stall: Stall
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
  posts: PostCreateManyWithoutAuthorInput
  stall: StallCreateOneWithoutOwnerInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutStallInput {
  create: UserCreateWithoutStallInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutPostsInput {
  name: String!
  email: String!
  password: String!
  stall: StallCreateOneWithoutOwnerInput
}

input UserCreateWithoutStallInput {
  name: String!
  email: String!
  password: String!
  posts: PostCreateManyWithoutAuthorInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  posts: PostUpdateManyWithoutAuthorInput
  stall: StallUpdateOneWithoutOwnerInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
}

input UserUpdateOneRequiredWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutStallInput {
  create: UserCreateWithoutStallInput
  update: UserUpdateWithoutStallDataInput
  upsert: UserUpsertWithoutStallInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutPostsDataInput {
  name: String
  email: String
  password: String
  stall: StallUpdateOneWithoutOwnerInput
}

input UserUpdateWithoutStallDataInput {
  name: String
  email: String
  password: String
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserUpsertWithoutStallInput {
  update: UserUpdateWithoutStallDataInput!
  create: UserCreateWithoutStallInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  stall: StallWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    