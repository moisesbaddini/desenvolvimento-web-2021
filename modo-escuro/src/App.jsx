import React, { useState } from "react";
import Light from "./Light";
import Dark from "./Dark";

const principal = {
  margin: 20,
  fontSize: "calc(10px + 2vmin)",
};

function App() {
  const [modo, setModo] = useState(false);

  const handleChange = (e) => setModo(e.target.checked);

  const trocarModo = () => setModo((anterior) => !anterior);

  return (
    <div style={principal}>
      <input type="checkbox" checked={modo} onChange={handleChange} /> Modo escuro
      <p>
        <button onClick={trocarModo}>Trocar para modo {modo ? "Light" : "Dark"}</button>
      </p>
      {modo ? <Dark /> : <Light />}
    </div>
  );
}

export default App;
