const { ApolloServer, gql } = require("apollo-server")
const mongoose = require('mongoose')
const {Schema} = mongoose
const {ObjectId} = mongoose.Schema.Types

// mongoose setup
const uri = "mongodb://localhost:27017/library-app"
mongoose.connect(uri,{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(
  console.log(`📚  db ready at: ${uri}`)
)

const Book = mongoose.model("Book", new Schema({
  title:String
}))
const Author = mongoose.model("Author", new Schema({
  name:String,
  books:{
    type: ObjectId,
    ref:"Book"
  }
}))


// create the schema
const schema = gql(` 
  type Query {
    books:[Book]
    authors:[Author]
    bookId(_id:ID!): Book
    authorId(_id:ID!): Author
  }
  type Mutation {
    postBook(title:String): Book
    postAuthor(name:String): Author
  }
  type Book {
    _id:ID
    title: String
  }

  type Author {
    _id:ID
    name:String
    books: [Book]
  }
`)

// create the resolvers
const resolvers = {
  Query: {
    books: async() => await Book.find({}),
    authors: async() => await Author.find({}),
    bookId: async(__,args) => await Book.findOne({_id:args._id}),
    authorId: async(__,args) => await Author.findOne({_id:args._id}),
  },
  Author:{
    books: async(parent)=>await Book.find({_id:{$in:parent.books}})
  },
  Mutation: {
    postBook: async(__,args) => {
      let book = new Book({
        title: args.title
      })
      return await book.save()
    },
    postAuthor: async(__,args) => {
      let author = new Author({
        name: args.name
      })
      return await author.save()
    },
  },
}

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
