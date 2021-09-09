function Todo({ username, email, title, detail, isCompleted, date }) {
  function handleClick() {}

  return (
    <div
      onClick={handleClick}
      className="p-4 m-4 space-y-3 bg-white shadow border-gray-600 rounded-lg hover:shadow-lg hover:border-black cursor-pointer"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p>{detail}</p>
    </div>
  );
}

export default Todo;
