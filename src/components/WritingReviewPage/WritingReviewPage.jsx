import React from "react";
import { Link } from "react-router-dom";
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
  FloatingLabel
} from "react-bootstrap";
import LoginPage from "../LoginPage/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Rating, RatingView } from 'react-simple-star-rating'

export default function WritingReviewPage() {
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
  const [commentTitle, setCommentTitle] = useState('')
  const [comment, setComment] = useState('') 
  const [jobWorkLifeBalance, setJobWorkLifeBalance] = useState(0)
  const [compensationBenefit, setCompensationBenefit] = useState(0);
  const [jobSecurityAdvancement, setJobSecurityAdvancement] = useState(0)
  const [management, setManagement ] = useState(0);
  const [jobCulture, setJobCulture] = useState(0)

  // Catch Rating value
  const handleWorkLifeBalance= (rate) => {
    setJobWorkLifeBalance(rate)

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
  const onSubmit =() => {
      console.log("button for submitting work life balance is", jobWorkLifeBalance)
      console.log("button for submitting compensation benefit is", compensationBenefit);
      console.log("button for submitting job security advancement", jobSecurityAdvancement);
      console.log("button for submitting management is",management);
      console.log(
        "button for submitting job culture is",
        jobCulture
      );
      console.log("comment title", commentTitle)
      console.log("comments is ", comment)
      setJobSecurityAdvancement(0)
      setJobWorkLifeBalance(0)
      setJobCulture(0)
      setCompensationBenefit(0)
      setManagement(0)
      setCommentTitle('')
      setComment('')
  }
  const gohome =() => {
      console.log("on go home/cancel button")
  }

  return (
    <>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#">LAW AUDIT</Navbar.Brand>
          </Container>
          <NavDropdown title={"Home"} id="navbarScrollingDropdown">
            <NavDropdown.Item onClick={() => history.push('/')}>Home</NavDropdown.Item>
            <NavDropdown.Item href="#action4">My Reviews</NavDropdown.Item>
             <NavDropdown.Item href="#action5">log-out</NavDropdown.Item>
          </NavDropdown>
        </Navbar>
      </Container>
      <Container>
        <Row xs={6} md={3}>
          <Col>
            {/* begining of map */}
            <Card style={{ width: "18rem", flex: 1 }}>
              <Card.Img
                variant="top"
                // src={items.imageUrl}
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
                <Card.Title></Card.Title>
                <Card.Text></Card.Text>
                <Card.Text>Phone number:</Card.Text>
                <Card.Text>Phone number:</Card.Text>
              </Card.Body>
            </Card>
            {/* end of map */}
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
      <Card.Text>Title</Card.Text>
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




