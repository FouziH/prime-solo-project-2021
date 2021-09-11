import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavDropdown,
  Form,
  Button,
  Card,
  Container,
  Col,
  Row,
  FloatingLabel
} from "react-bootstrap";
import LoginPage from "../LoginPage/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Rating, RatingView } from 'react-simple-star-rating'

export default function WritingReviewPage() {
    const dispatch = useDispatch()
    const company = useSelector((store) => store.companyIdReducer);
    const user = useSelector((store) => store.user);
    console.log("company id reducer is", company)
    console.log("company id is", company[0].id)

    const companyId = company[0].id;

    let userId = user.id
    console.log("user id is", userId)
    const history= useHistory()
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
    };
  const [commentTitle, setCommentTitle] = useState("");
  const [comment, setComment] = useState("");
  const [jobWorkLifeBalance, setJobWorkLifeBalance] = useState(0);
  const [compensationBenefit, setCompensationBenefit] = useState(0);
  const [jobSecurityAdvancement, setJobSecurityAdvancement] = useState(0)
  const [management, setManagement ] = useState(0);
  const [jobCulture, setJobCulture] = useState(0);

  // Catch Rating value
  const handleWorkLifeBalance= (rate) => {
    setJobWorkLifeBalance(rate);

  }
   const handleCompensationBenefit= (rate) => {
       setCompensationBenefit(rate);
    
   };
   const handleJobSecurityAdvancement = (rate) => {
      setJobSecurityAdvancement(rate);
    };
   const handleManagement = (rate) => {
       setManagement(rate);
     };
   const handleJobCulture = (rate) => {
        setJobCulture(rate);

   }
  const onSubmit =(event) => {
      event.preventDefault();

      dispatch({
        type: "ADD_NEW_REVIEW",
        payload: {
          commentTitle,
          comment,
          jobCulture,
          jobSecurityAdvancement,
          management,
          jobWorkLifeBalance,
          userId, 
          companyId
        }

      })
      //setting these local state to their original state
      setJobSecurityAdvancement(0);
      setJobWorkLifeBalance(0);
      setJobCulture(0);
      setCompensationBenefit(0);
      setManagement(0);
      setCommentTitle("");
      setComment("");
      history.push("/");
  }
  const gohome =() => {
      console.log("on go home/cancel button");

      history.push("/");
  }

  return (
    <>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand onClick={() => history.push("/")}>
              Law Audit
            </Navbar.Brand>
          </Container>
          <NavDropdown title={"Home"} id="navbarScrollingDropdown">
            <NavDropdown.Item onClick={() => history.push("/")}>
              Home
            </NavDropdown.Item>
            <NavDropdown.Item href="#action4">My Reviews</NavDropdown.Item>
            <NavDropdown.Item href="#action5">log-out</NavDropdown.Item>
          </NavDropdown>
        </Navbar>
      </Container>
      <Container>
        <Row xs={6} md={3}>
          <Col>
            {company.map((items) => (
              <Card style={{ width: "18rem", flex: 1 }}>
                <Card.Img
                  variant="top"
                  src={items.imageUrl}
                  style={styles.cardImage}
                />
                <Card.Body>
                  <Card.Title>{items.companyName}</Card.Title>
                  <Card.Text>
                    {items.address} {items.city}, {items.state} {items.zip}
                  </Card.Text>
                  <Card.Text>Phone number: {items.phoneNumber}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
      <Card.Text>How would you rate this company?</Card.Text>
      <Card.Text>
        Job Work/Life Balance{" "}
        <Rating
          onClick={handleWorkLifeBalance}
          ratingValue={jobWorkLifeBalance} /* Rating Props */
        />
      </Card.Text>
      <Card.Text>
        Compensation/Benefit{" "}
        <Rating
          onClick={handleCompensationBenefit}
          ratingValue={compensationBenefit} /* Rating Props */
        />
      </Card.Text>
      <Card.Text>
        Job.Security/Advancement{" "}
        <Rating
          onClick={handleJobSecurityAdvancement}
          ratingValue={jobSecurityAdvancement} /* Rating Props */
        />
      </Card.Text>
      <Card.Text>
        Management{" "}
        <Rating
          onClick={handleManagement}
          ratingValue={management} /* Rating Props */
        />
      </Card.Text>
      <Card.Text>
        Job Culture{" "}
        <Rating
          onClick={handleJobCulture}
          ratingValue={jobCulture} /* Rating Props */
        />
      </Card.Text>
      <Card.Text>Review Title</Card.Text>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Title"
        className="mb-3"
        value={commentTitle}
        style={{ width: "40%" }}
        onChange={(event) => setCommentTitle(event.target.value)}
      >
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>
      <Card.Text>Your Review (1500 characters max)*</Card.Text>
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "150px", width: "40%" }}
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
      </FloatingLabel>
      <Button onClick={gohome}>Cancel</Button>
      <Button onClick={onSubmit}>Submit</Button>
    </>
  );
}




