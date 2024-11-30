const express = require('express');
const router = express.Router();

const usercontroller = require('../controllers/usercontroller');

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended : false}));


router.post('/add/user', (req,res)=>{
    usercontroller.addUser(req,res);
})

module.exports = router;