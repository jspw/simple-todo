import React from "react";
import Home from "../components/Home/Home.jsx";
import NavBar from "../components/Navbar/NavBar.jsx";
import TodoStore from "../Context/TodoContext.jsx";

function App() {
  return (
    <TodoStore>
      <NavBar />
      <Home />
    </TodoStore>
  );
}

export default App;
