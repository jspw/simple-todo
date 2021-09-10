import { useState } from "react";

export default function EditTodo({
  username,
  email,
  todoTitle,
  todoDescription,
  editTodo,
  index,
  closeEditing,
}) {
  const [errorMessage, setErrorMessage] = useState("");

  const [isUserSectionEmpty, setUserSectionEmpty] = useState(false);

  const [isTitleSectionEmpty, setTitleSectionEmpty] = useState(false);

  const [formData, setFormData] = useState({
    username: username,
    email: email,
    todoTitle: todoTitle,
    todoDescription: todoDescription,
  });

  function handleTodoForm(e) {
    console.log(e.target.name, e.target.value);
    setFormData((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
    console.log("snot up", formData);
  }
  console.log("33 ", formData);

  function handleFormSubmit(e) {
    console.log(formData);
    if (formData.username === "") {
      setUserSectionEmpty(true);
      setErrorMessage("Please enter a username");
      console.log("User Section Empty");
    } else if (formData.email === "") {
      setUserSectionEmpty(true);
      setErrorMessage("Please enter an email");
    } else if (formData.todoTitle === "") {
      setUserSectionEmpty(false);
      setTitleSectionEmpty(true);
      setErrorMessage("Please enter a title");
    } else {
      editTodo(formData, index);
      //   closeEditing();
    }
    e.preventDefault();
  }

  return (
    <div className="flex center justify-center m-24 w-auto shadow-lg  fixed top-0 z-50 transform animate-fade-in-down">
      <div className="p-4 rounded-lg  bg-gray-100 space-y-2 border-gray-200">
        <div className="flex flex-row justify-between space-x-4">
          <div></div>

          <div className="text-xl font-bold">Edit Todo</div>
          <div className="cursor-pointer text-red-600" onClick={closeEditing}>
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
              onChange={handleTodoForm}
              type="text"
              className="p-2 m-1 max-w-xl border appearance-none rounded shadow focus:shadow-outline focus:border-blue-300 focus:outline-none"
              placeholder="Username"
              name="username"
            />
            <input
              value={formData.email}
              type="email"
              onChange={handleTodoForm}
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
              onChange={handleTodoForm}
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
              onChange={handleTodoForm}
              type="text"
              className="p-2 m-1 max-w-xl border appearance-none rounded shadow focus:shadow-outline focus:border-blue-300 focus:outline-none"
              placeholder="Todo Description"
              name="todoDescription"
            />
          </div>

          <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-400 active:bg-blue-700">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}