import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Card,
  Container,
  Col,
  Row,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router";
import { IoReorderThreeSharp } from "react-icons/io5";
function UserViewPag() {
    const userReview = useSelector((store) => store.userReviewReducer);
    const user = useSelector(store => store.user)
    const userId = user.id
    console.log("user id on user view page is", userId);
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch({
        type: "FETCH_ALL_USER_REVIEWS",
        payload: userId,
      });
    }, [userId]);
     
  return (
    <>
      {userReview.map((items, i) => (
        <>
          <br />
          <br />
          <Card style={{ width: "18rem" }}>
            {console.log("items are", items)}
            <Card.Img variant="top" src={items.imageurl} />
            <Card.Body>
              <Card.Title>{items.companyname}</Card.Title>
              <Card.Text>
                {items.address} {items.city} {items.state} {items.zip}
              </Card.Text>
              <Card.Text>Phone number: {items.phonenumber}
              </Card.Text>
              <Card.Text variant="primary">
                {" "}
                Rating:{" "}
                {(items.management +
                  items.jobculture +
                  items.compensationbenefit +
                  items.joblifebalance +
                  items.jobsecurityandadvancement) /
                  5}
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <br />
          <Card>
            <Card.Title>{items.commenttitle}</Card.Title>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <Card.Text>{items.username}</Card.Text>
                <p>{items.usercomment}</p>
              </blockquote>
              <Button variant="primary">Edit</Button>
              <Button
                onClick={() =>
                  dispatch({
                    type: "DELETE_ITEM",
                    payload: items.id,
                  })
                }
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        </>
      ))}
    </>
  );
}

export default UserViewPag;
