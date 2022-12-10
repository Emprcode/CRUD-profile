import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { postUser } from "../../axiosHelper.js";
import { CustomInputField } from "../../CustomInputField/CustomInputField.js";
import { toast } from "react-toastify";

export const UserForm = ({ getUsers }) => {
  const [newUser, setNewUser] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { status, message } = await postUser(newUser);
    toast[status](message);
    status === "success" && getUsers();
  };

  const inputFields = [
    {
      name: "fName",
      label: "First Name",
      type: "text",
      required: true,
      placeholder: "",
    },
    {
      name: "lName",
      label: "Last Name",
      type: "text",
      required: true,
      placeholder: "",
    },
    {
      name: "email",
      label: "E-mail",
      type: "text",
      unique: true,
      index: 1,
    },
    {
      name: "password",
      label: "Password",
      type: "text",
      required: true,
      placeholder: "",
    },
  ];
  return (
    <Form className="p-5" onSubmit={handleOnSubmit}>
      <h2>New user registration</h2>
      {inputFields.map((item, i) => {
        return <CustomInputField key={i} {...item} onChange={handleOnChange} />;
      })}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
