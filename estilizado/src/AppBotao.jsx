import React, { useState } from "react";
import Botao from "./Botao";

function App() {
  const [modo, setModo] = React.useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <input type="checkbox" />
        <span>Modo escuro</span>
        <p>
          <Botao>Teste</Botao>
          <Botao escuro={modo} tamanho={20} onClick={() => setModo((anterior) => !anterior)}>
            Esse é o nosso botão
          </Botao>
          <Botao onClick={() => alert("Cliquei no novo")}>Novo</Botao>
        </p>
      </header>
    </div>
  );
}

export default App;
