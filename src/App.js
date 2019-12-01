import React, { useState } from "react";
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
      <div className="armor-class">
        <label>Armor Class</label>
        <span>10</span>
      </div>
      <div className="hit-points">
        <label>Hit Points</label>
        <span>5</span>
      </div>
      <button>Roll</button>
    </div>
  );
}

export default App;
