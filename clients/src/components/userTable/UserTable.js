import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { deleteUsers } from "../../axiosHelper";
import { toast } from "react-toastify";
import { CustomModal } from "../customModal/CustomModal.js";
import { useState } from "react";

export const UserTable = ({ userList, getUsers }) => {
  const [show, setShow] = useState(false);

  const handleOnEdit = () => {
    setShow(!show);
  };
  const handleOnDelete = async (_id) => {
    if (window.confirm("delete this user?")) {
      const { status, message } = await deleteUsers(_id);
      getUsers();
      toast[status](message);
    }
  };
  return (
    <div>
      <CustomModal show={show} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userList.map(({ _id, fName, lName, email }) => (
            <tr key={_id}>
              <td>{fName}</td>
              <td>{lName}</td>
              <td>{email}</td>
              <td>
                <Button variant="warning" onClick={handleOnEdit}>
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleOnDelete(_id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
