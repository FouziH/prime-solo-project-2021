import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Container,
  Table,
  Modal,
} from "react-bootstrap";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
function AdminViewPageItems({ items }) {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const toggleTrueFalse = () => {
      setShowModal(handleShow);
    };
     const onViewButton = () => {
        console.log(items.id)
    }
    const modelContent = () => {
      return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{item.commenttitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{items.usercomment}</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onclick={handleClose}>
              Approve
            </Button>
            <Button variant="secondary">Delete</Button>
          </Modal.Footer>
        </Modal>
      );
    };

  return (
    <tr>
      <td>{items.companyname}</td>
      <td>{items.address}</td>
      <td>{items.city}</td>
      <td>{items.state}</td>
      <td>{items.zip}</td>
      <td>{items.userId}</td>
      {items.isflagged === false ? <td>No</td> : <td>Yes</td>}
      <td>
        <Button onClick={onViewButton}>view</Button>
      </td>
    </tr>
  );
}

export default AdminViewPageItems;
