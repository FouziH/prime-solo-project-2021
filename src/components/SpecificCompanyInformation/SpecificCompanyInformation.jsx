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
import { useHistory } from "react-router";
function SpecificCompanyInformation () {
  const history = useHistory()
  const company = useSelector((store) => store.companyIdReducer);
  const companyReviews = useSelector((store) => store.companyReviewReducer);
  console.log("search result is:", company)
 console.log("company review Reducer is", companyReviews)
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
      width: "80vw",
      height: "40vh",
    },
}
  const goHome = () =>{
    history.push('/')

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
        <NavDropdown title={"Home"} id="navbarScrollingDropdown">
          <NavDropdown.Item onClick={goHome}>Home</NavDropdown.Item>
          <NavDropdown.Item href="#action2">Log-in</NavDropdown.Item>
          <NavDropdown.Item href="#action3">Sign-up</NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
    <Container>
      <Row xs={6} md={3}>
        <Col>
          {company.map((items, i) => (
            <Card style={{ width: "18rem", flex: 1 }} key={i}>
              <Card.Img
                variant="top"
                src={items.imageUrl}
                style={styles.cardImage}
              />
              <Card.Body>
                {/* <Card.Text>
                  Average Rating:
                  {(items.jobculture +
                    items.joblifelalance +
                    items.compensationbenefit +
                    items.jobsecurityandadvancementr +
                    items.management) /
                    5}
                </Card.Text> */}
                <Card.Title>{items.companyName}</Card.Title>
                <Card.Text>
                  {items.address} {items.city}, {items.state} {items.zip}
                </Card.Text>
                <Card.Text>Phone number: {items.phoneNumber}</Card.Text>
                <Button variant="primary">Write Review</Button>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
    {companyReviews.map((review) => (
      <Card key={review.id}>
        <Card.Title>{review.commenttitle}</Card.Title>
        <Card.Text>Anonymous</Card.Text>
        <Card.Body>{review.usercomment}</Card.Body>
      </Card>
    ))}
  </>
);
}

export default SpecificCompanyInformation