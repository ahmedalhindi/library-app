const { makeExecutableSchema } = require("apollo-server-express")
const {mergeSchemas} = require('graphql-tools')
const fs = require("fs")


const resources = fs.readdirSync(__dirname)

// Auto load all typeDef and resolvers and makeExecutableSchema on them
const schemas = []
resources.map((resource) => {
    // exclude index from folders
  if (resource != "index.js") {
    const schema = makeExecutableSchema({
      typeDefs: require(`./${resource}/schema.js`),
      resolvers: require(`./${resource}/resolvers.js`),
    })
    schemas.push(schema)
  }
})

module.exports = mergeSchemas({schemas})
