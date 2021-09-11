import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl,Button, Card, Container, Col, Row} from "react-bootstrap";
import LoginPage from '../LoginPage/LoginPage';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { IoReorderThreeSharp } from "react-icons/io5";


function Homepage() {
  const history = useHistory()
  const styles = {
    cardImage: {
      objectFit: "cover",
      width: "50vw",
      height: "20vh",
    },
    Container: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    row: {
      marginLeft: 0,
      marginRight: 0,
    },
    col: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    Card: {
      margin: "50px",
      width: "400px",
    },
  };

  const dispatch = useDispatch()
  const companyInformation = useSelector((store) => store.companyReducer);
  const [search, setSearch] = useState('')

  console.log("company information reducer is",companyInformation)
  useEffect(() => {
    dispatch({
      type: "FETCH_COMPANY",
    });
  }, [])

  const onSearch = () => {
    console.log("search is", search)
    dispatch({
      type: "FETCH_SEARCHED_COMPANY_INFORMATION",
      payload: search,
    });
    setSearch('')
    history.push("/companyInfo"); 
  }
  

  return (
    <>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#">Law Audit</Navbar.Brand>
          </Container>
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
          <NavDropdown
            title={<IoReorderThreeSharp />}
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item onClick={() => history.push("/login")}>
              Log-in
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => history.push("/registration")}>
              Sign-up
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar>
      </Container>
      <Container style={styles.Container}>
        <Row xs={3} md={3} className="g-4" style={styles.row}>
          {Array.from({ length: 1 }).map((_, xds) => (
            <Col>
              {companyInformation.map((items, i) => (
                <Card
                  style={styles.Card}
                  key={i}
                  onClick={() => {
                    dispatch({
                      type: "FETCH_COMPANY_ID",
                      payload: items.id,
                    });
                    history.push("/companyInfo");
                  }}
                >
                  <Card.Img
                    variant="top"
                    style={styles.cardImage}
                    src={items.imageurl}
                  />
                  <Card.Body> 
                    <Card.Title>{items.companyname}</Card.Title>
                    <Card.Text>{items.address}</Card.Text>
                    <Card.Text>
                      {items.city}, {items.state} {items.zip}
                    </Card.Text>
                    <Card.Text>Phone number: {items.phonenumber}</Card.Text>
                    <Button variant="primary">Lear More</Button>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Homepage;