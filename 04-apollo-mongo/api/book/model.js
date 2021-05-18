const mongoose = require("mongoose");

const bookSchema  = new mongoose.Schema({
    title:String
});

const Book = mongoose.model("Book", bookSchema);

exports.Book = Book;
exports.bookSchema = bookSchema;
