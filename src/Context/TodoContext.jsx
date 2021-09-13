import { createContext, useState } from "react";
import LocalStorage from "../utils/localStorage";

export const TodoContext = createContext();

export default function TodoStore(props) {
  const todoLocalData = LocalStorage.getTodoList();
  const [todoList, setTodoList] = useState(todoLocalData);
  return (
    <TodoContext.Provider value={[todoList, setTodoList]}>
      {props.children}
    </TodoContext.Provider>
  );
}
