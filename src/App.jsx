import React from "react";
import TodoStore from "./Context/TodoContext";
import NavBar from "./components/Navbar/NavBar";
import Home from "./components/Home/Home";

function App() {
  return (
    <TodoStore>
      <NavBar />
      <Home />
    </TodoStore>
  );
}

export default App;
