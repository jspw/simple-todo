import { useState } from "react";

export default function AddTodo() {
  // create a modal using tailwindcss

  const [flag, setFlag] = useState(false);

  const showModal = () => {
    setFlag(true);
  };

  if (flag) {
    return (
      <div className="flex absolute center justify-center m-10 w-auto">
        <div className="p-4 rounded-lg shadow-lg bg-white space-y-4">
          <div className="flex flex-row justify-between space-x-4">
            <div>Add ToDo</div>
            <div className="cursor-pointer" onClick={() => setFlag(false)}>
              x
            </div>
          </div>
          <form className="flex flex-col center space-y-4">
            <input
              type="text"
              className="p-3 m-5 max-w-xl border appearance-none rounded shadow focus:shadow-outline focus:border-blue-300 focus:outline-none"
              placeholder="username"
            />
            <button className="bg-blue-500 text-white p-2 rounded-lg">
              Add
            </button>
          </form>
        </div>
      </div>
    );
  } else
    return (
      <div>
        <form>
          <input
            onClick={showModal}
            className="p-3 m-5 max-w-xl border appearance-none rounded shadow w-full focus:shadow-outline focus:border-blue-300 focus:outline-none"
            placeholder="Add a todo"
          />
        </form>
      </div>
    );
}
