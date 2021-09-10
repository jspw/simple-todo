import { useState } from "react";
import EditTodo from "./EditTodo";

function Todo({
  username,
  email,
  todoTitle,
  todoDescription,
  deleteTodo,
  editTodo,
  index,
}) {
  function handleClick() {}

  const [isEditing, setIsEditing] = useState(false);

  console.log(username, email);

  function closeEditing() {
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <EditTodo
        username={username}
        email={email}
        todoTitle={todoTitle}
        todoDescription={todoDescription}
        closeEditing={closeEditing}
        editTodo={editTodo}
        index={index}
      />
    );
  }

  return (
    <div
      onClick={handleClick}
      className="p-4 m-4 space-y-3 border border-gray-200  boxShadow rounded-lg flex flex-col justify-between flex-wrap hover:shadow-lg hover:border-transparent transform group w-48 h-auto"
    >
      <div>
        <div className="text-lg font-semibold">{todoTitle}</div>
        <p>
          By {username} ({email})
        </p>
      </div>

      {todoDescription ? (
        <div className="text-sm break-all">
          <b>Description : </b>
          {todoDescription}
        </div>
      ) : (
        ""
      )}

      <div className="group flex flex-row  justify-between space-x-2">
        <button
          className="hidden bg-green-700 font-serif text-white px-2 py-1 rounded-md hover:bg-green-500 active:bg-green-900 group-hover:block"
          onClick={() => setIsEditing(true)}
        >
          Update
        </button>
        <button
          className="hidden bg-red-700 text-white px-2 py-1 rounded-md hover:bg-red-500 active:bg-red-900 group-hover:block"
          onClick={() => deleteTodo(index)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
