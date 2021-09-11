import React, {useEffect}from 'react'
import {  useSelector, useDispatch } from "react-redux";
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
import { IoReorderThreeSharp } from "react-icons/io5";
function SpecificCompanyInformation () {
  const dispatch = useDispatch();
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
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Law Audit</Navbar.Brand>
        </Container>

        <NavDropdown
          title={<IoReorderThreeSharp />}
          id="navbarScrollingDropdown"
        >
          <NavDropdown.Item onClick={() => history.push("/")}>
            Home
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => history.push("/login")}>
            Log-in
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => history.push("/registration")}>
            Sign-up
          </NavDropdown.Item>
        </NavDropdown>
      </Navbar>
    </Container>
    <Container>
      
        <Row xs={6} md={3}>
          <Col>
            {company.map((items, i) => (
              <Card style={{ width: "18rem", flex: 1 }} key={i}>
                <Card.Img
                  variant="top"
                  src={items.imageurl}
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
                  <Card.Title>{items.companyname}</Card.Title>
                  <Card.Text>
                    {items.address} {items.city}, {items.state} {items.zip}
                  </Card.Text>
                  <Card.Text>Phone number: {items.phonenumber}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                      dispatch({
                        type: items.id,
                        payload: "FETCH_COMPANY_ID",
                      });
                      history.push("/login");
                    }}
                  >
                    Write Review
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
     
    </Container>
    {companyReviews.map((review) => (
      <Card key={review.id}>
        <Card.Title>{review.commenttitle}</Card.Title>
        <Card.Text>{review.username}</Card.Text>
        <Card.Body>{review.usercomment}</Card.Body>
      </Card>
    ))}
  </>
);
}

export default SpecificCompanyInformation