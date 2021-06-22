import React, { useState } from "react";
import "./App.css";

const tema = {
  background: "#ccc",
};

function App() {
  const [numero, setNumero] = React.useState(7);

  console.log("raiz do componente");

  React.useEffect(() => {
    let hoje = new Date();
    document.title = hoje.toLocaleDateString();

    //Exemplo de useEffect
    //setInterval()

    //Sem o array de dependências, o useEffect é disparado após toda renderização
    console.log("efeito outra vez");
    //array vazio significa única passagem no efeito
    //a montagem do componente
    //componentDidMount = Componente de classe

    //API busca inicial de dados

    setNumero(numero - 1);
  }, []);

  React.useEffect(() => {
    console.log("outro useEffect");
  });

  const evento = () => {
    console.log("um evento não renderiza de novo, alterar um state sim!");
    setNumero((ant) => ant + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Esse aplicação tem um novo título!!! {numero}</p>
        <button onClick={evento}>Clica nele</button>
      </header>
    </div>
  );
}

export default App;
