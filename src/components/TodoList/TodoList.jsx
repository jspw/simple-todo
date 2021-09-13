import { useContext } from "react";
import { TodoContext } from "../../Context/TodoContext";
import Todo from "../Todo/Todo";
export default function TodoList() {
  const [todoList, _] = useContext(TodoContext);
  if (typeof todoList === "undefined")
    return (
      <button type="button" class="bg-rose-600 ..." disabled>
        <svg
          className="animate-spin h-5 w-5 mr-3 ... p-5 text-yellow-500 text-lg"
          viewBox="0 0 24 24"
        ></svg>
        Processing
      </button>
    );
  else if (todoList.length === 0) {
    return (
      <div className="my-14 text-xl p-4 text-yellow-400">
        No todo to show, please add a todo.
      </div>
    );
  } else
    return (
      <div className="my-14 flex flex-wrap justify-center  ">
        {todoList.map((todo, id) => (
          <Todo
            key={id * Math.random()}
            index={id}
            username={todo.username}
            todoTitle={todo.todoTitle}
            todoDescription={todo.todoDescription}
            email={todo.email}
          />
        ))}
      </div>
    );
}
