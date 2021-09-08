import React from 'react'
import {  useSelector } from "react-redux";
import {
  Button,
  Card,
  Container,
  Col,
  Row,
  Nav,
  Navbar,
  NavDropdown
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function SpecificCompanyInformation () {
  const searchResults = useSelector((store) => store.homepageReducer);
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
}
return(
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
          <NavDropdown title={"Home"} id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Log-in</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Sign-up</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
  </Navbar>
  <Container> 
        <Row xs={6} md={3}>
          <Col>
            {searchResults.map((items) => (
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
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
      </>
    
  )
}

export default SpecificCompanyInformation