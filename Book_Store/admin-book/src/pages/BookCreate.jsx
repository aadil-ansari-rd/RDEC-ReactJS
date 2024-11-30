import { useState } from "react";
import axios from "axios"
import { Form, Row, Col ,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"

function BookCreate() {
  const navigate = useNavigate(); // useNavigate is for moving from one page to another page

  let [bookName , setBookName] = useState('');
  let [authorName , setAuthorName] = useState('');
  let [description , setDescription] = useState('');
  let [price , setPrice] = useState(0);
  let [publisher , setPublisher] = useState('');
  let [isbnNo , setIsbnNo] = useState('');

  
  function addBook(){
    let data= {
      bookName : bookName,
      authorName : authorName,
      description : description , 
      price : price, 
      publisher : publisher ,
      isbnNo : isbnNo
    }
    axios({
      url :"http://localhost:3000/add/book",
      method :"post" ,
      data : data
    }).then((res)=>{
      console.log(res)
      if(res.data.success){
        navigate('/books')
      }
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div>
      <Row>
        <Col></Col>
        <Col className="border">
          <h3 className="text-center m-3">Add Book</h3>
          <Form className="m-4">
            <Form.Group className="mb-3">
              <Form.Label>Book Name</Form.Label>
              <Form.Control type="text" placeholder="Book Name" onChange={(e)=>setBookName(e.target.value)}/>
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Author Name</Form.Label>
              <Form.Control type="text" placeholder="Author Name" onChange={(e)=>setAuthorName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Description" onChange={(e)=>setDescription(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control type="Number" placeholder="Price" onChange={(e)=>setPrice(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Publisher</Form.Label>
              <Form.Control type="text" placeholder="Publisher" onChange={(e)=>setPublisher(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>ISBN No</Form.Label>
              <Form.Control type="text" placeholder="ISBN No" onChange={(e)=>setIsbnNo(e.target.value)} />
            </Form.Group>
            <Button className="w-100" variant="dark" onClick={addBook}>
              Add Book
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}
export default BookCreate;
