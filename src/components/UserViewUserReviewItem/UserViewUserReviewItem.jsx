import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
function UserViewUserReviewItem({ items }) {
    const history = useHistory()
    const dispatch = useDispatch()

    const editItem = (items) => {
      console.log("edit item is", items);
      dispatch({
        type: "EDIT_ITEM",
        payload: items,
      });
      history.push('/edit')
    };
  return (
    <>
      <Card>
        <Card.Title>{items.commenttitle}</Card.Title>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <Card.Text>{items.username}</Card.Text>
            <p>{items.usercomment}</p>
          </blockquote>
          <Button variant="primary" onClick={() => editItem(items)}>
            Edit
          </Button>
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
  );
}

export default UserViewUserReviewItem;
