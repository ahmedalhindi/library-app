const { buildSchema } = require("graphql")
const express = require("express")
const { graphqlHTTP } = require("express-graphql")

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
const schema = buildSchema(` 
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
const resolvers = () => {
  const postBook = ({ title }) => {
    db.books.push({ title })
    return db.books
  }
  const books = () => {
    return db.books
  }
  const bookIdx = ({ idx }) => {
    return db.books[idx]
  }

  return { postBook, books, bookIdx }
}

const app = express()

app.use(
  "/graphql",
  graphqlHTTP({ schema: schema, rootValue: resolvers(), graphiql: true })
)
app.listen(3000)
console.log("GraphQL server is listening on PORT 3000")
