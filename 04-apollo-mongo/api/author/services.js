const {Author} = require('./model')

exports.findall = async ()=>{
    return await Author.find()
}

exports.findId = async (id)=>{
    return await Author.findOne({_id:id})
}

exports.new = async({name, age})=>{
    let author = new Author({
        name,
        age,
    })
    return await author.save()
}