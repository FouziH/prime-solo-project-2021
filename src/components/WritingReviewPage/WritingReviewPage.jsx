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
  const [comment, setComment] = useState('') 
  const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // Some logic
  }
  const onSubmit =() => {
      console.log("button for submitting reviews", comment)
      setComment('')
  }
  const gohome =() => {
      console.log("on go home/cancel button")
  }

  return (
    <>
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
      <Card.Text>
        Job Work/Life Balance{" "}
        <Rating
          onClick={handleRating}
          ratingValue={rating} /* Rating Props */
        />
      </Card.Text>
      <Card.Text>
        Compensation/Benefit{" "}
        <Rating
          onClick={handleRating}
          ratingValue={rating} /* Rating Props */
        />
      </Card.Text>
      <Card.Text>
        Job.Security/Advancement{" "}
        <Rating
          onClick={handleRating}
          ratingValue={rating} /* Rating Props */
        />
      </Card.Text>
      <Card.Text>
        Job Culture{" "}
        <Rating
          onClick={handleRating}
          ratingValue={rating} /* Rating Props */
        />
      </Card.Text>
      <Card.Text>
        Management{" "}
        <Rating
          onClick={handleRating}
          ratingValue={rating} /* Rating Props */
        />
      </Card.Text>
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "150px", width: "40%" }}
          onChange={(event) => setComment(event.target.value)}
        />
      </FloatingLabel>
      <Button onClick={gohome}>Cancel</Button>
      <Button onClick={onSubmit}>Submit</Button>
    </>
  );
}




