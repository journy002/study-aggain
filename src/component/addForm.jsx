import React from "react";

function AddForm() {
  return (
    <div>
      <form style={{ display: "inline" }}>
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          age:
          <input type="text" />
        </label>
        <label>
          job:
          <input type="text" />
        </label>
      </form>
      <button>Add</button>
    </div>
  );
}

export default AddForm;
