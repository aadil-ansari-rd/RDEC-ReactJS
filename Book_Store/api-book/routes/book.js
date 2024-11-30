const express = require("express");
const router = express.Router();

const bookcontroller = require("../controllers/bookcontroller");

const bodyParser = require("body-parser");

const multer = require('multer')
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

const upload = multer({
  storage : multer.diskStorage({}) , 
  limits : {fileSize : 10*1024*1024}
})

router.post("/add/book", upload.single('file'),(req, res) => {
  bookcontroller.addBook(req, res);
});

router.get("/books", (req, res) => {
  bookcontroller.getBooks(req, res);
});

router.get("/book/:id", (req, res) => {
  bookcontroller.getBook(req, res);
});

router.delete('/delete/book/:id' , (req,res)=>{
  bookcontroller.deleteBook(req,res);
})

router.put('/edit/book/:id',(req,res)=>{
  bookcontroller.editBook(req,res);
})

module.exports = router;
