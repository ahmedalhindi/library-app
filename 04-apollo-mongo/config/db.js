const mongoose = require("mongoose")
const uri = "mongodb://localhost:27017/library-app"

module.exports = mongoose
  .connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(console.log(`db ready at ${uri}`))
