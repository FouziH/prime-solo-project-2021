import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function UserViewPageCompanyItem({ items }) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        {console.log("items are", items)}
        <Card.Img variant="top" src={items.imageurl} />
        <Card.Body>
          <Card.Title>{items.companyname}</Card.Title>
          <Card.Text>
            {items.address} {items.city} {items.state} {items.zip}
          </Card.Text>
          <Card.Text>Phone number: {items.phonenumber}</Card.Text>
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
    </>
  );
}

export default UserViewPageCompanyItem;
