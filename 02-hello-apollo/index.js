const { ApolloServer, gql } = require("apollo-server")

// create a memory db
//* Plese note this would be replaced by a mongo db for example
const db = {
  books: [
    { title: "title0" },
    { title: "title1" },
    { title: "title2" },
    { title: "title3" },
    { title: "title4" },
    { title: "title5" },
  ],
}

// create the schema
const schema = gql(` 
 type Book {
     title: String!
  }
  type Query {
    books:[Book]
    bookIdx(idx:ID!): Book
  }
  type Mutation {
    postBook(title:String): [Book]
  }
`)

// create the resolvers
const resolvers = {
  Query: {
    books: () => {
      return db.books
    },
    bookIdx: ({ idx }) => {
      return db.books[idx]
    },
  },
  Mutation: {
    postBook: ({ title }) => {
      db.books.push({ title })
      return db.books
    },
  },
}

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
