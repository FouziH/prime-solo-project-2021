import { useDispatch, useSelector } from "react-redux";
function SpecificCompanyInformation() {
  const searchResults = useSelector((store) => store.homepageReducer);
  return (
    <>
      <Container>
        <Row xs={6} md={3}>
          <Col>
            {searchResults.map((items) => (
              <Card style={{ width: "18rem", flex: 1 }} key={items.id}>
                <Card.Img
                  variant="top"
                  src={items.imageUrl}
                  style={styles.cardImage}
                />
                <Card.Body>
                  <Card.Text>Rating 4.55</Card.Text>
                  <Card.Title>{items.companyName}</Card.Title>
                  <Card.Text>
                    {items.address} {items.city}, {items.state} {items.zip}
                  </Card.Text>
                  <Card.Text>Phone number: {items.phoneNumber}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SpecificCompanyInformation