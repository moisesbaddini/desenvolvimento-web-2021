import React, { useState } from "react";
import "./App.css";
import Lista from "./Lista";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Músicas que ouvi</p>
        <Lista />
      </header>
    </div>
  );
}

export default App;
