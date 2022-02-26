import logo from "./logo.svg";
import "./App.css";
import Counter from "./component/counter";
import InputSample from "./component/inputSample";
import InputSample2 from "./component/inputSample2";
import UserList from "./component/userList";
import { useRef, useState } from "react";
import CreateUser from "./component/CreateUser";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "omms",
      email: "omms@naver.com",
    },
    {
      id: 2,
      username: "omms2",
      email: "omms@naver.com2",
    },
    {
      id: 3,
      username: "omms3",
      email: "omms@naver.com3",
    },
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };

    // setUsers([...users, user]);
    setUsers(users.concat(user));

    setInputs({
      username: "",
      email: "",
    });

    nextId.current += 1;
  };

  const onDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onCreate={onCreate}
        onChange={onChange}
      />
      <UserList users={users} onDelete={onDelete} />
    </>
  );
}

export default App;
