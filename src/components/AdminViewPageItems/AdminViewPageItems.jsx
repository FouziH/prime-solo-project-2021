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
  const history = useHistory()
  const onViewButton =() => {
    console.log("item id is", items.id)
  
    
  }
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
