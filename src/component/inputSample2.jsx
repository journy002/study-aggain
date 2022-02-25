import React, { useRef, useState } from "react";

function InputSample2() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  const nameInput = useRef();

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        ref={nameInput}
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
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample2;
