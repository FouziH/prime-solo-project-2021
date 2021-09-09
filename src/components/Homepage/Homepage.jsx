import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl,Button, Card, Container, Col, Row} from "react-bootstrap";
import LoginPage from '../LoginPage/LoginPage';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';


function Homepage() {
  const history = useHistory()
  const styles = {
    card: {
      backgroundColor: "#B7E0F2",
      padding: "3rem",
      margin: "auto 5px",
      width: "80vw",
      height: "30vh",
      display: "flex",
      flexDirection: "rows",
    },
    cardImage: {
      objectFit: "cover",
      width: "40vw",
      height: "30vh",
    },
};

  const dispatch = useDispatch()
  const companyInformation = useSelector((store) => store.companyReducer);
  const [search, setSearch] = useState('')
  useEffect(() => {
    dispatch({
      type: "FETCH_COMPANY",
    });
  }, [])

  const onSearch = () => {
    console.log("search is", search)
    dispatch({
      type: "FETCH_COMPANY_INFORMATION",
      payload: search,
    });
    setSearch('')
    history.push("/companyInfo"); 
  }
  

  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        className="navbar navbar-default navbar-fixed-top"
        role="navigation"
      >
        <Navbar.Brand href="#">LAW AUDIT</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <FormControl
              type="text"
              placeholder="Search..."
              className="mr-2"
              value={search}
              aria-label="Search"
              onChange={(event) => setSearch(event.target.value)}
            />
            <Button
              variant="outline-success"
              className="btn btn-small"
              onClick={onSearch}
            >
              Search
            </Button>
          </Form>
          <NavDropdown title={"Home"} id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Log-in</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Sign-up</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
      <Container> 
        <Row xs={6} md={3}>
          <Col>
            {companyInformation.map((items) => (
              <Card style={{ width: "18rem", flex: 1 }} key={items.id}>
                <Card.Img
                  variant="top"
                  src={items.imageUrl}
                  style={styles.cardImage}
                />
                <Card.Body>
                  <Card.Text>Rating 4.55</Card.Text>
                  <Card.Title>{items.companyName}</Card.Title>
                  <Card.Text>
                    {items.address} {items.city}, {items.state} {items.zip}
                  </Card.Text>
                  <Card.Text>Phone number: {items.phoneNumber}</Card.Text>
                  <Button variant="primary" onClick={() => {dispatch({
                    type: "FETCH_COMPANY_INFORMATION",
                    payload: items.id
                  })
                history.push("/companyInfo");
                  }                  
                  }>Lear More</Button>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Homepage;
