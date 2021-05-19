const mongoose = require("mongoose")

const authorSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
  },
  {
    versionKey: "_v",
  }
)

const Author = mongoose.model("Author", authorSchema)

exports.Author = Author
exports.authorSchema = authorSchema
