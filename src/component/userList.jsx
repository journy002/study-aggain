import React from "react";

function UserList() {
  const users = [
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
  ];

  return (
    <div>
      <div>
        {users[0].username} <span>{users[0].email}</span>
      </div>
    </div>
  );
}

export default UserList;
