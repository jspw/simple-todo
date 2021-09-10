import { useState } from "react";
import { EDITING_MODE } from "../../utils/constants";
import EditTodo from "../forms/EditTodo";

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

  function closeEditing() {
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <EditTodo
        actionType={EDITING_MODE}
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
      <div className="">
        <p className="text-lg font-semibold break-all">{todoTitle}</p>
        <p className="text-xs wrapper break-all">
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
