import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router";
import { IoReorderThreeSharp } from "react-icons/io5";
import UserViewPageCompanyItem from "../UserViewPageCompanyItem/UserViewPageCompanyItem";
import UserViewUserReviewItem from "../UserViewUserReviewItem/UserViewUserReviewItem";
function UserViewPag() {
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
      {userReview.map((items, i) => (
        <>
          <br />
          <br />
          <UserViewPageCompanyItem items={items} />
          <br />
          <br />
          <UserViewUserReviewItem items={items} />
        </>
      ))}
    </>
  );
}

export default UserViewPag;
