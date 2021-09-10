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

  console.log(companyInformation)
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
            <NavDropdown.Item onClick={() => history.push("/")}>
              Home
            </NavDropdown.Item>
            <NavDropdown.Item href="#action4">Log-in</NavDropdown.Item>
            <NavDropdown.Item href="#action5">Sign-up</NavDropdown.Item>
          </NavDropdown>
        </Navbar>
      </Container>
      {/* <Navbar
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
          <NavDropdown title={"Home"} id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Log-in</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Sign-up</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar> */}
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
                    src={items.imageUrl}
                  />
                  <Card.Body>
                    <Card.Title>{items.companyName}</Card.Title>
                    <Card.Text>{items.address}</Card.Text>
                    <Card.Text>
                      {items.city}, {items.state} {items.zip}
                    </Card.Text>
                    <Card.Text>Phone number: {items.phoneNumber}</Card.Text>
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


{/* <Container>
  <Row xs={6} md={3}>
    <Col>
      {companyInformation.map((items) => (
        <Card
          style={{ width: "18rem", flex: 1 }}
          key={items.id}
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
            src={items.imageUrl}
            style={styles.cardImage}
            onClick={() => {
              dispatch({
                type: "FETCH_COMPANY_ID",
                payload: items.id,
              });
              history.push("/companyInfo");
            }}
          />
          <Card.Body>
            <Card.Text>Rating 4.55</Card.Text>
            <Card.Title>{items.companyName}</Card.Title>
            <Card.Text>
              {items.address} {items.city}, {items.state} {items.zip}
            </Card.Text>
            <Card.Text>Phone number: {items.phoneNumber}</Card.Text>
            <Button
              variant="primary"
              onClick={() => {
                dispatch({
                  type: "FETCH_COMPANY_ID",
                  payload: items.id,
                });
                history.push("/companyInfo");
              }}
            >
              Lear More
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Col>
  </Row>
</Container>; */}
