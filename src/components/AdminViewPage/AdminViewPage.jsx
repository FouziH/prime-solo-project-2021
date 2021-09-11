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
import { IoReorderThreeSharp } from "react-icons/io5";
import React, {useEffect} from 'react'
function AdminViewPage() {

  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand onClick={() => history.push("/")}>
            Law Audit
          </Navbar.Brand>
        </Container>
        <NavDropdown title={<IoReorderThreeSharp/>} id="navbarScrollingDropdown">
          <NavDropdown.Item onClick={() => history.push("/")}>
          Add new company
          </NavDropdown.Item>
          <NavDropdown.Item href="#action5">log-out</NavDropdown.Item>
        </NavDropdown>
      </Navbar>
    </Container>
  );
}

export default AdminViewPage;
