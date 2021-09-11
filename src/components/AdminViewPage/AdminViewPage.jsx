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
  Table
} from "react-bootstrap";
import { IoReorderThreeSharp } from "react-icons/io5";
import React from 'react'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
function AdminViewPage() {
  const dispatch = useDispatch()
  const history = useHistory()
  useEffect(() => {
    dispatch({
      type: "FETCH_ADMIN_VIEW_DATA"
    })
  }, [])

  return (
    <>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand onClick={() => history.push("/")}>
              Law Audit
            </Navbar.Brand>
          </Container>
          <NavDropdown
            title={<IoReorderThreeSharp />}
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item onClick={() => history.push("/")}>
              Add new company
            </NavDropdown.Item>
            <NavDropdown.Item href="#action5">log-out</NavDropdown.Item>
          </NavDropdown>
        </Navbar>
      </Container>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Reviewer ID</th>
            <th>Approved</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Zimmerman Reed LLP</td>
            <td>80 S 8th St UNIT 1100</td>
            <td>Minnespolis</td>
            <td>Minnesota</td>
            <td>Zip</td>
            <td>No</td>
            <td><Button>view</Button></td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default AdminViewPage;
