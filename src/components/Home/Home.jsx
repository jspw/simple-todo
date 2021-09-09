import AddTodo from "../AddTodo/AddTodo";
import NavBar from "../Navbar/NavBar";
import ToDos from "../Todos/Todos";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col items-center">
      <AddTodo />
      <ToDos />
    </div>
  );
}
