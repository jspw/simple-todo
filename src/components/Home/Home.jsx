import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../Context/TodoContext";
import LocalStorage from "../../utils/localStorage";
import AddTodo from "../AddTodo/AddTodo";
import ToDos from "../TodoList/TodoList";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col flex-wrap items-center">
      <AddTodo />
      <ToDos />
    </div>
  );
}
