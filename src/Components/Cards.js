import React, { useEffect, useState } from "react";
import HTTP from './AxioxConfig';
import { Row, Col, Card, Button, Pagination } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import './App.scss'

function Cards({ getOrderCount }) {
  const [fetchedData, setfetchedData] = useState([]);
  const [orderCounts, setorderCounts] = useState(1);

  let orderCount = () => {
    setorderCounts(orderCounts + 1);
    getOrderCount(orderCounts);
  };
  console.log(orderCounts);
  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  useEffect(() => {
    dataFetch();
  }, []);
  let dataFetch = async () => {
    let response = await HTTP.get("/api/products");
    let dataCopy = [];
    dataCopy.push(...response.data.products);
    setfetchedData(dataCopy);
  };
  console.log(fetchedData);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Order Successfull</Popover.Header>
      <Popover.Body>
        <strong>Wohooo...! Added to your OderList.</strong>
      </Popover.Body>
    </Popover>
  );

  return (
    <div className="parent_Card">
      <Row xs={1} md={5} className="g-4">
        {fetchedData.map((val, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={val.productImageURL} height="200" />
              <Card.Body>
                <Card.Text>{val.productPrice}</Card.Text>
                <Card.Title>{val.productName}</Card.Title>
                <Card.Text>{val.productDescription}</Card.Text>

                <Card.Text>
                  {/* <Button>Buy</Button> */}
                  <OverlayTrigger
                    trigger="click"
                    placement="top"
                    overlay={popover}
                  >
                    <Button variant="success" onClick={orderCount}>
                      BUY
                    </Button>
                  </OverlayTrigger>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="parent_Pagination">
        <Pagination>{items}</Pagination>
      </div>
    </div>
  );
}
export default Cards