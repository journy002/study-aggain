import React, { useState } from "react";

function InputSample2() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <div>
      <input
        name="name"
        value={name}
        placeholder="name"
        type="text"
        onChange={onChange}
      />
      <input
        name="nickname"
        value={nickname}
        placeholder="nickname"
        type="text"
        onChange={onChange}
      />
      <button>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample2;
