import { useState } from "react";
import { EDITING_MODE } from "../../utils/constants";
import TodoForm from "../forms/TodoForm";

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

  function closeTodoFormModal() {
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <TodoForm
        actionType={EDITING_MODE}
        username={username}
        email={email}
        todoTitle={todoTitle}
        todoDescription={todoDescription}
        closeTodoFormModal={closeTodoFormModal}
        editTodo={editTodo}
        index={index}
      />
    );
  }

  return (
    <div
      onClick={handleClick}
      className="p-4 m-4 space-y-3 border border-gray-200  boxShadow rounded-lg flex flex-col justify-between flex-wrap hover:shadow-lg hover:border-transparent transform group w-64"
    >
      <div className="flex flex-col justify-start space-y-4 break-words">
        <div className="space-y-2">
          <p className="text-lg font-semibold font-mono break-words">
            {todoTitle}
          </p>
          <hr />
          <div className="text-xs wrapper break-words space-y-2 ">
            <div className="space-x-2">
              <i class="fas fa-user-edit"></i>
              <span className="text-pink-800">{username}</span>
            </div>
            <div className="space-x-2">
              <i className="fas fa-mail-bulk"></i>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          </div>
        </div>

        {todoDescription ? (
          <div
            className="text-sm break-words "
            style={{ wordBreak: "break-word" }}
          >
            {todoDescription}
          </div>
        ) : (
          ""
        )}
      </div>

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
