const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamps')
let Schema = mongoose.Schema;
const BookSchema = new Schema({
    title : { type : String },
    authorName : { type : String },
    isbnNo : { type : String },
    publicationHouse : { type : String },
    price : { type : String },
    createdAt : Date,
    updatedAt : Date
})

BookSchema.plugin(timestamps , {index : true});

module.exports = mongoose.model('Book',BookSchema)