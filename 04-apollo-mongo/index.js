const { ApolloServer} = require("apollo-server")
require('./config/db')


const server = new ApolloServer({
  schema : require('./api')
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
