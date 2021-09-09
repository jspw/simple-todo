import React from "react";
import AddTodo from "../components/AddTodo/AddTodo.jsx";
import Home from "../components/Home/Home.jsx";
import NavBar from "../components/Navbar/NavBar.jsx";
import ToDos from "../components/Todos/Todos.jsx";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Home />
    </React.Fragment>
  );
}

export default App;
