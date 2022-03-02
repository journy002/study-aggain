import logo from "./logo.svg";
import "./App.css";
import Counter from "./component/counter";
import InputSample from "./component/inputSample";
import InputSample2 from "./component/inputSample2";
import UserList from "./component/userList";
import { useMemo, useRef, useState } from "react";
import CreateUser from "./component/CreateUser";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중");
  return users.filter((user) => user.active).length;
}

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
      active: true,
    },
    {
      id: 2,
      username: "omms2",
      email: "omms@naver.com2",
      active: false,
    },
    {
      id: 3,
      username: "omms3",
      email: "omms@naver.com3",
      active: false,
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

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  const count = useMemo(() => countActiveUsers(users));

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onCreate={onCreate}
        onChange={onChange}
      />
      <UserList users={users} onDelete={onDelete} onToggle={onToggle} />
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;
