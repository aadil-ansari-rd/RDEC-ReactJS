const Book = require('../models/Book')

async function addBook(req,res){
    try{
        let book = new Book(req.body);
        await book.save();
        res.status(200).send({success : true , message : 'Data sent sucessfully'})
    }catch(err){
        console.log(err.message);
        res.status(400).send({success : false , message : 'something went wrong ... '})

    }
}
module.exports= {
    addBook
}