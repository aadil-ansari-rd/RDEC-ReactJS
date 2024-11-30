import book1 from "../../public/book1.jpg";
import book2 from "../../public/book2.jpg";
import book3 from "../../public/book3.jpg";
import { Container, Row, Col, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
function BookCard() {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Img src={book1}></Card.Img>
            <Card.Body>
              <Card.Title>Jungle Book</Card.Title>
              <Card.Text>This is a horror Book</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img src={book2}></Card.Img>
            <Card.Body>
              <Card.Title>Prem Chand</Card.Title>
              <Card.Text>This is a comic Book</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img src={book3}></Card.Img>
            <Card.Body>
              <Card.Title>Exploring C</Card.Title>
              <Card.Text>Educational Book</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Img src={book1}></Card.Img>
            <Card.Body>
              <Card.Title>Jungle Book</Card.Title>
              <Card.Text>This is a horror Book</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img src={book2}></Card.Img>
            <Card.Body>
              <Card.Title>Prem Chand</Card.Title>
              <Card.Text>This is a comic Book</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img src={book3}></Card.Img>
            <Card.Body>
              <Card.Title>Exploring C</Card.Title>
              <Card.Text>Educational Book</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default BookCard;
