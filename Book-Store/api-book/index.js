const express = require('express');
const connect = require('./connection');
const cors = require('cors')
const book = require('./routes/book')
const user = require('./routes/user')
const app = express();
app.use(cors());
connect();
app.use(book);
app.use(user);
app.listen(3000, (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Your Server is running on port 3000');       
    }
})