import { Button, Container, Table, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function BookList() {
  let [books, setBooks] = useState([]);
  let [isDelete, setIsDelete] = useState(false);
  let [search, setSearch] = useState("");
  // useEffect(() => {
  //   axios({
  //     url: "http://localhost:3000/books",
  //     method: "get",
  //   })
  //     .then((res) => {
  //       setBooks(res.data.data);
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []); //second parameter is a condition and it is optional
  //so we put an empty array here so that useEffect only run once, it will stop useEffect to
  //uncontrollable recieve data from back end

  useEffect(() => {
    axios({
      url: "http://localhost:3000/books",
      method: "get",
      params: {
        search: search,
      },
    })
      .then((res) => {
        setBooks(res.data.data);
        console.log(res);
        setIsDelete(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isDelete, search]);

  const navigate = useNavigate();
  function addBook() {
    navigate("/add/book");
  }

  function viewBook(id) {
    navigate("/view/book");
  }
  function goToBookEditPage(id) {
    navigate("/edit/book/" + id);
  }
  function deleteBook(id) {
    axios({
      url: "http://localhost:3000/delete/book/" + id,
      method: "delete",
    })
      .then((res) => {
        //window.location.reload()   // result through refresh the page  :window.location.reload() , but this is not a good practice
        //setBooks(res.data.data)    //result through setVariable : useState
        if (res.data.success) {
          setIsDelete(true);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  return (
    <div>
      <h1 className="text-center">Book Library</h1>
      <hr />
      <Form.Group className="mb-3">
        <Form.Label>
          Search <i class="bi bi-search"></i>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Book Name  to Search "
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form.Group>
      <Container>
        <Container className="d-flex justify-content-end">
          <Button variant="primary" onClick={addBook}>
            Add Book
          </Button>
        </Container>
        <Table striped bordered hover className="my-3">
          <thead>
            <tr>
              <th>Book Name</th>
              <th>Author Name</th>
              <th>Price</th>
              <th>Publisher</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{book.bookName}</td>
                <td>{book.authorName}</td>
                <td>{book.price}</td>
                <td>{book.publisher}</td>
                <td>
                  <Button
                    className="ms-2"
                    variant="primary"
                    onClick={() => viewBook(book._id)}
                  >
                    <i class="bi bi-eye"></i>
                  </Button>
                  <Button
                    className="ms-2"
                    variant="warning"
                    onClick={() => goToBookEditPage(book._id)}
                  >
                    <i class="bi bi-pencil"></i>
                  </Button>
                  <Button
                    className="ms-2"
                    variant="danger"
                    onClick={() => deleteBook(book._id)}
                  >
                    <i class="bi bi-trash3"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
export default BookList;
