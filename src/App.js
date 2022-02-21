import logo from "./logo.svg";
import "./App.css";
import Todolist from "./component/todolist";
import AddForm from "./component/addForm";

function App() {
  const users = [
    {
      name: "peter",
      age: 30,
      job: "teacher",
    },
    {
      name: "peter2",
      age: 32,
      job: "hammer",
    },
    {
      name: "peter3",
      age: 33,
      job: "grove",
    },
  ];

  return (
    <>
      <AddForm />
      <Todolist users={users} />
    </>
  );
}

export default App;
