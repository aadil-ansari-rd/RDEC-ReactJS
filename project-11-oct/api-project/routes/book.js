const express = require('express');
const router = express.Router();

const bookcontroller = require('../controllers/bookcontroller');

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended : false}));


router.post('/add/book', (req,res)=>{
    bookcontroller.addBook(req,res);
})

module.exports = router;