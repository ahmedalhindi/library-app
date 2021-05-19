const book = require('./services')

// create the resolvers
module.exports = {
    Query: {
      books: () => book.findall(),
      bookId: (__,{ id }) => book.findId(id)
    },
    Mutation: {
      postBook: (__,{title}) => book.new(title)
    },
  }