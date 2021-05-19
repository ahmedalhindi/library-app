const book = require('./services')

// create the resolvers
module.exports = {
    Query: {
      books: () => book.findall(),
      bookId: (__,{ id }) => book.findIdx(id)
    },
    Mutation: {
      postBook: async (__,{title}) => book.new(title)
    },
  }