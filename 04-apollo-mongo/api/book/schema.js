const { gql } = require("apollo-server")

module.exports = gql(` 
 type Book {
    id:ID
    title: String!

  }
  type Query {
    books:[Book]
    bookIdx(idx:ID!): Book
  }
  type Mutation {
    postBook(title:String): Book
  }
`)
