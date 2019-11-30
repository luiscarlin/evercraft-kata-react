import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  return (
    <div className="App">
      <div className="name">
        <label>Enter Name</label>
        <input
          onChange={event => setName(event.target.value)}
          value={name}
        ></input>
      </div>
      <div className="alignment">
        <label>Alignment</label>
      </div>
    </div>
  );
}

export default App;
