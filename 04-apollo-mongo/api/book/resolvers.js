// import db model
const {Book} = require('./model')
// create the resolvers
module.exports = {
    Query: {
      books: async() => {
        const res = await Book.find({})
        return res
      },
      bookIdx: ({ idx }) => {
        return db.books[idx]
      },
    },
    Mutation: {
      postBook: ({ title }) => {
        db.books.push({ title })
        return db.books
      },
    },
  }