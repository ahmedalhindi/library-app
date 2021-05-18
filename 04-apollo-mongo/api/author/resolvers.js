// create the resolvers
module.exports = {
    Query: {
      authors: () => {
        return db.authors
      },
      authorIdx: ({ idx }) => {
        return db.authors[idx]
      },
    }
  }