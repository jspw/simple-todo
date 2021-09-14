import * as actions from "./actionTypes";

export function addTodo(todo) {
  return {
    type: actions.ADD_TODO,
    payload: { todo },
  };
}

export function editTodo(id, todo) {
  return {
    type: actions.EDIT_TODO,
    payload: {
      todo,
    },
  };
}

export function deleteTodo(id) {
  return {
    type: actions.DELETE_TODO,
    payload: { id },
  };
}
