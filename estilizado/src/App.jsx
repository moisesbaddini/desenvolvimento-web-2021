import React, { useState } from "react";
import Botao from "./Botao";
import Pagina from "./Pagina";

function App() {
  const [modo, setModo] = React.useState(false);

  return (
    <Pagina escuro={modo}>
      <header className="App-header">
        <input type="checkbox" checked={modo} onChange={() => setModo((anterior) => !anterior)} />
        <span>Alternar para Modo {modo ? "Claro" : "Escuro"}</span>
        <p>
          <Botao escuro={modo}>Teste</Botao>
        </p>
      </header>
    </Pagina>
  );
}

export default App;
