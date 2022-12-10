import "./App.css";
import { Title } from "./components/Title";
import { SearchForm } from "./components/SearchForm.js";
import { UserList } from "./components/UserList";
import { useState } from "react";

const App = () => {
  const [list, setList] = useState([]);
  return (
    <div className="App">
      <Title />
      <SearchForm />
      <UserList />
    </div>
  );
};

export default App;
