import { todoList } from "../../utils/store";
import Todo from "../Todo/Todo";

export default function ToDos() {
  const toDos = todoList;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
      {toDos.map((todo) => (
        <Todo
          id={todo.id}
          title={todo.title}
          detail={todo.detail}
          date={todo.date}
          isCompleted={todo.isCompleted}
        />
      ))}
    </div>
  );
}
