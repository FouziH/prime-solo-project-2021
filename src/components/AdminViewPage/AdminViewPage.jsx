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
  const adminData = useSelector((store) => store.adminViewPageReducer);
  console.log("admin data reducer is", adminData)
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
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Reviewer ID</th>
            <th>Approved</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {adminData.map((items, i) => (
            <tr key={i}>
              <td>{items.companyname}</td>
              <td>{items.address}</td>
              <td>{items.city}</td>
              <td>{items.state}</td>
              <td>{items.zip}</td>
              <td>{items.userId}</td>
              <td>{items.isflagged}</td>
              <td>
                <Button>view</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default AdminViewPage;
