const { gql } = require("apollo-server")

module.exports = gql(` 
 type Book {
    _id:ID
    title: String!

  }
  type Query {
    books:[Book]
    bookId(id:ID!): Book
  }
  type Mutation {
    postBook(title:String): Book
  }
`)
