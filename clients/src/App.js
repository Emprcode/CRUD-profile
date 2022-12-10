import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from 'react-toastify';
import { useState } from "react";
import { UserForm } from "./components/userForm/UserForm.js";
import { fetchUsers } from "./axiosHelper";

const App = () => {
  const [userList, setUserList] = useState([]);

  const getUsers = async () => {
    const {users} = await fetchUsers();
    setUserList(users)

  }
  return (
    <div className="App">
    < UserForm   getUsers= {getUsers}/>
    <  ToastContainer/>
    </div>
  );
};

export default App;
