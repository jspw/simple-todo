import { TODO_LIST } from "./constants";

export function saveTodoListLocally(todoList) {
  localStorage.setItem(TODO_LIST, JSON.stringify(todoList));
}

export function getLocalTodoList() {
  let todoList = localStorage.getItem(TODO_LIST);
  if (todoList) {
    return JSON.parse(todoList);
  } else {
    return [];
  }
}
