const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamps')
let Schema = mongoose.Schema;
const UserSchema = new Schema({
    firstName : { type : String },
    lastName : { type : String },
    email : { type : String },
    password : { type : String },
    createdAt : Date,
    updatedAt : Date
})

UserSchema.plugin(timestamps , {index : true});

module.exports = mongoose.model('User', UserSchema);

//axious : front end server se data ko databse server tk laana le jana