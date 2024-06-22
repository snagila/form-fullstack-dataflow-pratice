import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { createTask } from "../axios/formAxios";

const AddForm = () => {
  const initialState = {
    name: "",
    address: "",
    phone: "",
    email: "",
  };
  const [formData, setFormData] = useState({});
  const { name, address, phone, email } = formData;

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnsubmit = async (e) => {
    e.preventDefault();
    // this line of code sends the formdata to the axios as this function is created in axios
    const result = await createTask(formData);
    setFormData(initialState);
  };
  return (
    <>
      <Form className="container" onSubmit={handleOnsubmit}>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label> Name</Form.Label>
              <Form.Control
                placeholder="Enter your name"
                name="name"
                type="text"
                value={name}
                onChange={handleOnChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label> Address</Form.Label>
              <Form.Control
                placeholder="Enter your address"
                type="text"
                name="address"
                value={address}
                onChange={handleOnChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label> Phone</Form.Label>
              <Form.Control
                placeholder="Enter your phone"
                type="string"
                name="phone"
                value={phone}
                onChange={handleOnChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label> Email</Form.Label>
              <Form.Control
                placeholder="Enter your e-mail"
                type="e-mail"
                name="email"
                value={email}
                onChange={handleOnChange}
              />
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
