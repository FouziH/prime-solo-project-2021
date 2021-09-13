import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router";
import { IoReorderThreeSharp } from "react-icons/io5";
import UserViewPageCompanyItem from "../UserViewPageCompanyItem/UserViewPageCompanyItem";
import UserViewUserReviewItem from "../UserViewUserReviewItem/UserViewUserReviewItem";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Container,
  Table,
  Modal,
  Card,
} from "react-bootstrap";
function UserViewPag() {
  const history = useHistory()
    const userReview = useSelector((store) => store.userReviewReducer);
    const user = useSelector(store => store.user)
    const userId = user.id
    console.log("user id on user view page is", userId);
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch({
        type: "FETCH_ALL_USER_REVIEWS",
        payload: userId
      });
    }, [userId]);


     
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
            <NavDropdown.Item>
              Sign off
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar>
      </Container>
      {userReview.map((items, i) => (
        <>
          <br />
          <UserViewPageCompanyItem items={items} />
          <br />
          <UserViewUserReviewItem items={items} />
        </>
      ))}
    </>
  );
}

export default UserViewPag;
