import React, { useState } from "react";

function App() {
  const [insertedValue, updatedValue] = useState("");
  const [listarray, storethearray] = useState([]);

  function storeValue(event) {
    const { value } = event.target;
    updatedValue(value);
    console.log(value);
  }
  function addValue() {
    storethearray((previous) => [...previous, insertedValue]);
    updatedValue("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={storeValue} value={insertedValue} type="text" />
        <button onClick={addValue}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listarray.map((allList) => {
            return <li>{allList}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
