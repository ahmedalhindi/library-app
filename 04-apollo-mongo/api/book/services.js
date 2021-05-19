const {Book} = require('./model')

exports.findall = async ()=>{
    return await Book.find()
}

exports.findId = async (id)=>{
    return await Book.findOne({_id:id})
}

exports.new = async(title)=>{
    let book = new Book({
        title
    })
    return await book.save()
}