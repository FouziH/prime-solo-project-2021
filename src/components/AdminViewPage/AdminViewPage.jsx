import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Card,
  Container,
  Col,
  Row,
  FloatingLabel,
} from "react-bootstrap";
function AdminViewPage() {
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand onClick={() => history.push("/")}>
            Law Audit
          </Navbar.Brand>
        </Container>
        <NavDropdown title={"Home"} id="navbarScrollingDropdown">
          <NavDropdown.Item onClick={() => history.push("/")}>
            Home
          </NavDropdown.Item>
          <NavDropdown.Item href="#action4">My Reviews</NavDropdown.Item>
          <NavDropdown.Item href="#action5">log-out</NavDropdown.Item>
        </NavDropdown>
      </Navbar>
    </Container>
  );
}

export default AdminViewPage;
