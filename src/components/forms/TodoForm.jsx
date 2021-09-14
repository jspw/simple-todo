import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../Context/TodoContext";
import { FORM_ADD_MODE, FORM_EDIT_MODE } from "../../utility/constants";
import * as actions from "../../Context/actionTypes";

export default function TodoForm({
  fromActionType,
  closeTodoFormModal,
  id,
  username,
  email,
  todoTitle,
  todoDescription,
}) {
  const [errorMessage, setErrorMessage] = useState("");

  const [isUserSectionEmpty, setUserSectionEmpty] = useState(false);

  const [isTitleSectionEmpty, setTitleSectionEmpty] = useState(false);

  const { dispatch } = useContext(TodoContext);

  const [formData, setFormData] = useState({
    id: id || Date.now() + Math.random(),
    username: username || "",
    email: email || "",
    todoTitle: todoTitle || "",
    todoDescription: todoDescription || "",
  });

  function handleEsc(event) {
    if (event.keyCode === 27) {
      closeTodoFormModal();
    }
  }

  function handleTodoFormInputs(e) {
    setFormData((previousState) => {
      return {
        ...previousState,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (formData.username === "") {
      setUserSectionEmpty(true);
      setErrorMessage("Please enter a username");
    } else if (formData.email === "") {
      setUserSectionEmpty(true);
      setErrorMessage("Please enter an email");
    } else if (formData.todoTitle === "") {
      setUserSectionEmpty(false);
      setTitleSectionEmpty(true);
      setErrorMessage("Please enter a title");
    } else {
      if (fromActionType === FORM_EDIT_MODE) {
        dispatch({
          type: actions.EDIT_TODO,
          payload: {
            todo: formData,
          },
        });
      } else if (fromActionType === FORM_ADD_MODE) {
        dispatch({
          type: actions.ADD_TODO,
          payload: {
            todo: formData,
          },
        });
      }
      closeTodoFormModal();
    }
  }

  return (
    <div
      className="flex center justify-center m-24 w-auto shadow-lg  fixed top-0 z-50"
      onKeyDown={handleEsc}
    >
      <div className="p-4 rounded-lg  bg-gray-100 space-y-2 border-gray-200">
        <div className="flex flex-row justify-between space-x-4">
          <div></div>
          <div className="text-xl font-bold">
            {fromActionType === FORM_EDIT_MODE ? `Edit Todo` : "Add a Todo"}
          </div>
          <div
            className="cursor-pointer text-red-600"
            onClick={closeTodoFormModal}
          >
            X
          </div>
        </div>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col center space-y-2 lg:"
        >
          <label className="lg font-semibold">User Info</label>
          <hr />
          <div className="flex flex-col sm:flex-row">
            <input
              value={formData.username}
              onChange={handleTodoFormInputs}
              autoFocus
              type="text"
              className="p-2 m-1 max-w-xl border appearance-none rounded shadow focus:shadow-outline focus:border-blue-300 focus:outline-none"
              placeholder="Username"
              name="username"
            />
            <input
              value={formData.email}
              type="email"
              onChange={handleTodoFormInputs}
              className="p-2 m-1 max-w-xl border appearance-none rounded shadow focus:shadow-outline focus:border-blue-300 focus:outline-none"
              placeholder="Email Address"
              name="email"
            />
          </div>
          {isUserSectionEmpty ? (
            <div className="text-center text-red-500  p-1 rounded">
              {errorMessage}
            </div>
          ) : (
            ""
          )}

          <label className="lg font-semibold">Todo Section</label>
          <hr />
          <div className="flex flex-col">
            <input
              value={formData.todoTitle}
              onChange={handleTodoFormInputs}
              type="text"
              className="p-2 m-1 max-w-xl border appearance-none rounded shadow focus:shadow-outline focus:border-blue-300 focus:outline-none"
              placeholder="Todo Title"
              name="todoTitle"
            />
            {isTitleSectionEmpty ? (
              <div className="text-center text-red-500  p-1 rounded">
                {errorMessage}
              </div>
            ) : (
              ""
            )}
            <textarea
              value={formData.todoDescription}
              onChange={handleTodoFormInputs}
              type="text"
              className="p-2 m-1 max-w-xl border appearance-none rounded shadow focus:shadow-outline focus:border-blue-300 focus:outline-none"
              placeholder="Todo Description"
              name="todoDescription"
            />
          </div>

          <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-400 active:bg-blue-700">
            {fromActionType === FORM_EDIT_MODE ? `Update` : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
}
