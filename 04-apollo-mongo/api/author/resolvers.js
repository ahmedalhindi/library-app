const author = require('./services')
// create the resolvers
module.exports = {
    Query: {
      authors: () => author.findall(),
      authorId: (__,{ id }) => author.findId(id),
    }
  }