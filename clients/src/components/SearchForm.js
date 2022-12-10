import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const SearchForm = () => {
  const [form, setForm] = useState([]);
  const handleOnChange = (e) => {
    const { value } = e.target;
    console.log(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Form className="m-5" onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="name"
          placeholder="Enter your first name"
          onChange={handleOnChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="name"
          placeholder="Enter your last name"
          onChange={handleOnChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={handleOnChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={handleOnChange}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
