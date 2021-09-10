class LocalStorage {
  static saveTodoList(todoList) {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }

  static getTodoList() {
    let todoList = localStorage.getItem("todoList");
    if (todoList) {
      return JSON.parse(todoList);
    } else {
      return [];
    }
  }
}

export default LocalStorage;
