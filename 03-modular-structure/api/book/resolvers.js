// create the resolvers
module.exports = {
    Query: {
      books: () => {
        return db.books
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