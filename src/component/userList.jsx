import React, { useEffect } from "react";

function User({ user, onDelete, onToggle }) {
  useEffect(() => {
    console.log("user값 설정");
    console.log(user, "설정");
    return () => {
      console.log("user가 바뀌기 전");
      console.log(user, "바뀌기 전");
    };
  }, [user]);
  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      <span>({user.email})</span>
      <button onClick={() => onDelete(user.id)}>Del</button>
    </div>
  );
}

function UserList({ users, onDelete, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default UserList;
