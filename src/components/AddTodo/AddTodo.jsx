import { useState } from "react";
import { ADD_MODE } from "../../utils/constants";
import TodoForm from "../forms/TodoForm";

export default function AddTodo(props) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  function showForm() {
    setIsFormVisible(true);
  }

  function closeTodoFormModal() {
    setIsFormVisible(false);
  }

  if (isFormVisible) {
    return (
      <TodoForm closeTodoFormModal={closeTodoFormModal} actionType={ADD_MODE} />
    );
  } else
    return (
      <div className="w-full my-4  flex justify-center bg-white sticky top-0 z-50 md:my-4 sm:my-4">
        <input
          onClick={showForm}
          className="p-3 mx-4 max-w-xl fixed border appearance-none rounded shadow w-full focus:shadow-outline focus:border-blue-300 focus:outline-none sm:mx-4 md:mx-4 fa"
          placeholder="&#xf040;   Add a todo"
        />
      </div>
    );
}
