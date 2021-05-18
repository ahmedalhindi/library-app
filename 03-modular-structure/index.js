const { ApolloServer} = require("apollo-server")


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


const server = new ApolloServer({
  schema : require('./api')
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
