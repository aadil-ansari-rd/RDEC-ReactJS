import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form , Button , Row, Col } from "react-bootstrap";
const BookEdit = () => {
  let navigate = useNavigate()
  let [book , setBook] = useState({
    bookName : '',
    authorName : '',
    description : '',
    price : 0,
    publisher : '',
    isbnNO :''
  });
  let params = useParams();
  let id = params.id;

  useEffect(() => {
    axios({
      url: "http://localhost:3000/book/" +id ,
      method: "get",

    }).then((res)=>{
      setBook(res.data.data);
    }).catch((err)=>{
        console.log(err);
    });
  } ,[params]);

  function handleChange(e){
    let name = e.target.name
    let value = e.target.value
    setBook((prev)=>{
      return {
        ...prev , [name]:value
      }
    })
  }
  function editBook(){
    axios({
      url : "http://localhost:3000/edit/book/" +id,
      method : "put", 
      data : book
    }).then((res)=>{
      navigate('/books')
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div>
      <Row>
        <Col></Col>
        <Col className="border">
          <h3 className="text-center m-3">Edit Book</h3>
          <h3 className="text-center m-3">{book.bookName}</h3>
          <Form className="m-4">
            <Form.Group className="mb-3">
              <Form.Label>Book Name</Form.Label>
              <Form.Control type="text" name="bookName" value={book.bookName} onChange={handleChange} />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Author Name</Form.Label>
              <Form.Control type="text" name = "authorName" value={book.authorName} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name = "description" value={book.description} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" name = "price" value={book.price} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Publisher</Form.Label>
              <Form.Control type="text" name= "publisher" value={book.publisher} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>ISBN No</Form.Label>
              <Form.Control type="text" name="publisher" value={book.isbnNO} onChange={handleChange}/>
            </Form.Group>
            <Button className="w-100" variant="dark" onClick={editBook} >
              Edit Book
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default BookEdit;
