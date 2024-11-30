import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../public/vite.svg";
function MyNav() {
  return (
    <Container fluid>
      <Navbar expand="md" bg="success" data-bs-theme="dark">
      {/* //parameter in the above tag are props */}
        <Container>
          <Navbar.Brand>
            <img src={logo} width="30px" height="30px" alt="" />
            <span style={{ marginLeft: "10px" }}>RD Book Store</span>
          </Navbar.Brand>
          <Navbar.Toggle area-control="mynav"></Navbar.Toggle>
          <Navbar.Collapse id="mynav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Books</Nav.Link>
              <Nav.Link href="#">Contact Us</Nav.Link>
              <NavDropdown id="mynav" title="Category">
                <NavDropdown.Item>Horror</NavDropdown.Item>
                <NavDropdown.Item>Comic</NavDropdown.Item>
                <NavDropdown.Item>Suspense</NavDropdown.Item>
                <NavDropdown.Divider></NavDropdown.Divider>
                <NavDropdown.Item>Academic</NavDropdown.Item>

            </NavDropdown>
            </Nav>
            
            <Navbar.Text>Login/Signin</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}
export default MyNav;
//rfc
