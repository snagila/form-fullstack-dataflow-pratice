import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const AddForm = () => {
  return (
    <>
      <Form className="container">
        <Row>
          <Col>
            <Form.Group>
              <Form.Label> Name</Form.Label>
              <Form.Control placeholder="Enter your name" type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label> Address</Form.Label>
              <Form.Control placeholder="Enter your address" type="text" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label> Phone</Form.Label>
              <Form.Control placeholder="Enter your phone" type="number" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label> Email</Form.Label>
              <Form.Control placeholder="Enter your e-mail" type="e-mail" />
            </Form.Group>
          </Col>
        </Row>
        <Button
          variant="primary"
          type="submit"
          className="my-3 mx-auto d-block"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default AddForm;
