const {gql} = require('apollo-server')

module.exports = gql(` 
 type Author {
     name: String!
  }
  type Query {
    authors:[Author]
    authorIdx(idx:ID!): Author
  }
`)