import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card, Alert, Col, Row } from "react-bootstrap";

const Subscribe = () => {
  return (
    <div
      className="d-flex justify-content-center mt-5"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Form>
          <Form.Group>
            <Form.Row>
              <Col>
                <Form.Label>First Name</Form.Label>
                <Form.Control placeholder="John"></Form.Control>
              </Col>
              <Col>
                <Form.Label>Last Name</Form.Label>
                <Form.Control placeholder="Doe"></Form.Control>
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="johndoe@email.com"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="johndoe@email.com"
            ></Form.Control>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Subscribe;
