import React from "react";
import Todomaker from "./todomaker";

function Todolist({ users }) {
  return (
    <>
      {users.map((user) => (
        <Todomaker user={user} />
      ))}
    </>
  );
}
export default Todolist;
