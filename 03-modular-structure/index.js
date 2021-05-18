const { ApolloServer} = require("apollo-server")
const {makeExecutableSchema, mergeSchemas} = require('graphql-tools')
const {merge} = require('lodash')

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
  authors:[
    {name: "author0"},
    {name: "author1"},
    {name: "author2"},
    {name: "author3"},
    {name: "author4"},
    {name: "author5"},
  ]
}

// create the schema
// moved to respective /api/resource/schema.js
const bookSchema = makeExecutableSchema({
    typeDefs: require('./api/book/schema'),
    resolvers: require('./api/book/resolvers')
})
const authorSchema = makeExecutableSchema({
    typeDefs: require('./api/author/schema'),
    resolvers: require('./api/author/resolvers')
})

const schema = mergeSchemas({
    schemas:[
        bookSchema,
        authorSchema
    ]
})


const server = new ApolloServer({
  schema: schema
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
