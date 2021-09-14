import { saveTodoListLocally } from "../utility/localStorage";
import { actions } from "./actionTypes";

export default function todoReducer(state, action) {
  switch (action.type) {
    case actions.ADD_TODO: {
      const updatedTodoList = [...state, action.payload.todo];
      saveTodoListLocally(updatedTodoList);
      return updatedTodoList;
    }

    case actions.EDIT_TODO: {
      const updatedState = state.map((todo) => {
        if (todo.id === action.payload.todo.id) {
          return action.payload.todo;
        } else return todo;
      });
      saveTodoListLocally(updatedState);
      return updatedState;
    }

    case actions.DELETE_TODO: {
      const updatedTodoList = state.filter((st) => st.id !== action.payload.id);
      saveTodoListLocally(updatedTodoList);
      return updatedTodoList;
    }

    default:
      return state;
  }
}
