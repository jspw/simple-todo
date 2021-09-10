function Todo({ username, email, title, detail, isCompleted, date }) {
  function handleClick() {}

  return (
    <div
      onClick={handleClick}
      className="p-4 m-4 space-y-3 border border-gray-200  boxShadow rounded-lg flex flex-col justify-between flex-wrap hover:shadow-lg hover:border-transparent transform group  "
    >
      <div>
        <div className="text-lg font-semibold">{title}</div>
        <p>
          By {username} ({email})
        </p>
      </div>
      <div className="">
        <b>Description : </b>
        {detail}
      </div>

      <div className="group flex flex-row  justify-between ">
        <button className="hidden bg-green-700 font-serif text-white px-2 py-1 rounded-md hover:bg-green-500 active:bg-green-900 group-hover:block">
          Update
        </button>
        <button className="hidden bg-red-700 text-white px-2 py-1 rounded-md hover:bg-red-500 active:bg-red-900 group-hover:block">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
