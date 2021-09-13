import {
  Navbar,
  NavDropdown,
  Form,
  Button,
  Container,
  Col,
  Row,
} from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
function AddNewCompany() {
    const history = useHistory()
    const dispatch =useDispatch()
    const [newCompany, setNewCompany] = useState({
    companyname: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phonenumber: "",
    imageurl: ""
    })

  const handleInputChange = (event) => {
    setNewCompany({
      ...newCompany,
      [event.target.name]: event.target.value,
    });
  };
    const onSubmit = (event) =>{
        event.preventDefault()
        console.log("new company information is", newCompany)
        dispatch({
            type: "ADD_NEW_COMPANY",
            payload: newCompany
        })
        history.push('/admin')

    }

  return (
    <Form onSubmit={onSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formHorizontalEmail">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            name="companyname"
            value={newCompany.companyname}
            onChange={handleInputChange}
            type="text"
            placeholder="Enter company name"
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control
          name="address"
          value={newCompany.address}
          onChange={handleInputChange}
          type="text"
          placeholder="1234 Main St"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridPhoneNumber">
        <Form.Label>Phone number</Form.Label>
        <Form.Control
          name="phonenumber"
          value={newCompany.phonenumber}
          onChange={handleInputChange}
          type="phone-number"
          placeholder="(123) 456-789"
        />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            name="city"
            value={newCompany.city}
            onChange={handleInputChange}
            type="text"
            placeholder="City"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control
            name="state"
            value={newCompany.state}
            onChange={handleInputChange}
            type="text"
            placeholder="State"
          ></Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control
            name="zip"
            value={newCompany.zip}
            onChange={handleInputChange}
            type="text"
            placeholder="Zip"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Image url</Form.Label>
          <Form.Control
            name="imageurl"
            value={newCompany.imageurl}
            onChange={handleInputChange}
            type="url"
            placeholder="Enter image url"
          ></Form.Control>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" id="formGridCheckbox"></Form.Group>
      <Button variant="primary" type="cancel" onClick={() => history.push('/admin')}>
        Cancel
      </Button>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
}

export default AddNewCompany;
