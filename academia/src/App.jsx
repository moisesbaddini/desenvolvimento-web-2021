import React, { useState } from "react";
import "./App.css";
import Academia from "./Academia";

function App() {
  console.log("render App");
  return (
    <div className="App">
      <Academia className="App-header" />
    </div>
  );
}

export default App;
