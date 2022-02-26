import React from "react";

function CreateUser({ username, email, onChange, onCreate }) {
  return (
    <>
      <input
        type="text"
        name="username"
        value={username}
        placeholder="username"
        onChange={onChange}
      />
      <input
        type="text"
        name="email"
        value={email}
        placeholder="email"
        onChange={onChange}
      />
      <button onClick={onCreate}>Add</button>
    </>
  );
}

export default CreateUser;
