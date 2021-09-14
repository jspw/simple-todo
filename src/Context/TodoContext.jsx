import { createContext, useReducer } from "react";
import { getLocalTodoList } from "../utility/localStorage";
import todoReducer from "./todoReducer";

const initialState = [];
export const TodoContext = createContext(initialState);

export default function TodoStore(props) {
  const initialTodoList = getLocalTodoList();
  const [todoList, dispatch] = useReducer(todoReducer, initialTodoList);
  return (
    <TodoContext.Provider value={{ todoList, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
}
