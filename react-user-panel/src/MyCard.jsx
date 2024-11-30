import { Container, Card, Row, Col } from "react-bootstrap";
import book1 from "../public/book1.jpg";
import book2 from "../public/book2.jpg";
function MyCard() {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{width: '18rem'}}>
            <Card.Img src={book1} ></Card.Img>
            <Card.Body>
              <Card.Title>Horror Book</Card.Title>
              <Card.Text>This is a horror Book</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{width: '18rem'}}>
            <Card.Img src={book2} ></Card.Img>
            <Card.Body>
              <Card.Title>Comic Book</Card.Title>
              <Card.Text>This is a comic Book</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
export default MyCard;
