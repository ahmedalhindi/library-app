const {gql} = require('apollo-server')

module.exports = gql(` 
 type Author {
     name: String!
  }
  type Query {
    authors:[Author]
    authorId(id:ID!): Author
  }
`)