import { useState } from "react";
import { ADD_MODE } from "../../utils/constants";
import EditTodo from "../forms/EditTodo";

export default function AddTodo(props) {
  const [flag, setFlag] = useState(false);

  function showModal() {
    setFlag(true);
  }

  function closeModal() {
    setFlag(false);
  }

  if (flag) {
    return (
      <EditTodo
        closeModal={closeModal}
        addTodo={props.addTodo}
        actionType={ADD_MODE}
      />
    );
  } else
    return (
      <div className="w-full my-2  flex justify-center bg-gray-400 sticky top-0 z-50 ">
        <input
          onClick={showModal}
          className="p-3 max-w-xl fixed border appearance-none rounded shadow w-full focus:shadow-outline focus:border-blue-300 focus:outline-none "
          placeholder="Add a todo"
        />
      </div>
    );
}
