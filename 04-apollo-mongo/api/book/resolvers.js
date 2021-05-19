// import db model
const {Book} = require('./model')
const book = require('./services')
// create the resolvers
module.exports = {
    Query: {
      books: () => book.findall(),
      bookIdx: (__,{ idx }) => book.findIdx(idx)
    },
    Mutation: {
      postBook: async (__,{title}) => book.new(title)
    },
  }