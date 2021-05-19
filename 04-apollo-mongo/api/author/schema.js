const { gql } = require("apollo-server")

module.exports = gql(` 
 type Author {
    _id:ID!
    name: String!
  }
  type Query {
    authors:[Author]
    authorId(id:ID!): Author
  }
  type Mutation {
    postAuthor(name:String, age: Int):Author
  }
  type Book {
    _id: ID
  }
`)
