import Todo from "../Todo/Todo";
export default function TodoList({ todoList, deleteTodo, editTodo }) {
  if (typeof todoList === "undefined")
    return (
      <button type="button" class="bg-rose-600 ..." disabled>
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
        Processing
      </button>
    );
  else if (todoList.length === 0) {
    return (
      <div className="my-14 text-xl p-4 text-yellow-400">
        No todo to show, please add a todo
      </div>
    );
  } else
    return (
      <div className="my-14 flex flex-wrap justify-center  ">
        {todoList.map((todo, id) => (
          <Todo
            key={id}
            index={id}
            username={todo.username}
            todoTitle={todo.todoTitle}
            todoDescription={todo.todoDescription}
            email={todo.email}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </div>
    );
}
