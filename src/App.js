import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  return (
    <div className="App">
      <div className="name">
        <label>Name</label>
        <input
          onChange={event => setName(event.target.value)}
          value={name}
          placeholder="enter name"
        ></input>
      </div>
      <div className="alignment">
        <label>Alignment</label>
        <select>
          <option value="good">Good</option>
          <option value="neutral">Neutral</option>
          <option value="evil">Evil</option>
        </select>
      </div>
    </div>
  );
}

export default App;
