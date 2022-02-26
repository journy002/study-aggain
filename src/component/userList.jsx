import React from "react";

function User({ user, onDelete }) {
  return (
    <div>
      <b>{user.username}</b>
      <span>({user.email})</span>
      <button onClick={() => onDelete(user.id)}>Del</button>
    </div>
  );
}

function UserList({ users, onDelete }) {
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default UserList;
