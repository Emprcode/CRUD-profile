import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { UserForm } from "./components/userForm/UserForm.js";
import { fetchUsers } from "./axiosHelper";
import { UserTable } from "./components/userTable/UserTable.js";
import Container from "react-bootstrap/Container";

const App = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const { users } = await fetchUsers();
    setUserList(users);
  };
  return (
    <div className="App">
      <section>
        <UserForm getUsers={getUsers} />
      </section>

      <section className="table mt-5">
        <Container>
          <UserTable userList={userList} getUsers={getUsers} />
        </Container>
      </section>
      <ToastContainer />
    </div>
  );
};

export default App;
