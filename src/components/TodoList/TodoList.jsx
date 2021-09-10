import { todoList } from "../../utils/store";
import Todo from "../Todo/Todo";

export default function TodoList() {
  const todos = todoList;

  if (todos.length === 0) {
    return (
      <div className="my-14 text-xl p-4">
        No todo to show, please add a todo
      </div>
    );
  } else
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 ">
        {todos.map((todo) => (
          <Todo
            id={todo.id}
            title={todo.title}
            detail={todo.detail}
            username={todo.username}
            email={todo.email}
            date={todo.date}
            isCompleted={todo.isCompleted}
          />
        ))}
      </div>
    );
}
