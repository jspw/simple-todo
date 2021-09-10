import React, { useEffect, useState } from "react";
import LocalStorage from "../../utils/localStorage";
import AddTodo from "../AddTodo/AddTodo";
import ToDos from "../TodoList/TodoList";

export default function Home() {
  const [todoList, setTodoList] = useState([]);

  const [flag, setFlag] = useState(false);

  useEffect(() => {
    let x = LocalStorage.getTodoList();
    if (x) {
      setTodoList(x);
      setFlag(true);
    }
  }, [flag]);

  function addTodo(todo) {
    setTodoList([...todoList, todo]);
    LocalStorage.saveTodoList([...todoList, todo]);
  }

  function deleteTodo(index) {
    let confirm = window.confirm("You are deleting the todo? ");

    if (confirm) {
      let newTodoList = [...todoList];
      newTodoList.splice(index, 1);
      setTodoList(newTodoList);
      LocalStorage.saveTodoList(newTodoList);
    }
  }

  function editTodo(index, todo) {
    let newTodoList = todoList;
    newTodoList[index] = todo;
    setTodoList([...newTodoList]);
    LocalStorage.saveTodoList(newTodoList);
  }

  return (
    <div className="container mx-auto flex flex-col flex-wrap items-center">
      <AddTodo addTodo={addTodo} />
      <ToDos todoList={todoList} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}
