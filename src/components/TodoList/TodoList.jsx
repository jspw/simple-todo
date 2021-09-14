import { useContext } from "react";
import { TodoContext } from "../../Context/TodoContext";
import Todo from "../Todo/Todo";

export default function TodoList() {
  const { todoList } = useContext(TodoContext);

  if (todoList.length === 0) {
    return (
      <div className="my-14 text-xl p-4 text-yellow-400">
        No todo to show, please add a todo.
      </div>
    );
  } else
    return (
      <div className="my-14 flex flex-wrap justify-center  ">
        {todoList.map(({ id, username, email, todoTitle, todoDescription }) => (
          <Todo
            key={id}
            id={id}
            username={username}
            email={email}
            todoTitle={todoTitle}
            todoDescription={todoDescription}
          />
        ))}
      </div>
    );
}
