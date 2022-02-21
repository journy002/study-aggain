import React from "react";

function Todomaker({ user }) {
  return (
    <>
      <div>
        <span>{user.name}</span>,<span>{user.age}</span>,<span>{user.job}</span>
        <button>Del</button>
      </div>
    </>
  );
}

export default Todomaker;
