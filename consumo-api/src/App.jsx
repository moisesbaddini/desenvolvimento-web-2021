import React, { useState } from 'react';
import './App.css'
import axios from 'axios';

function App() {
  //callback resposta da requisição
  //o parâmetro response
  function cb (response) {
    console.log("dados", response.data);
  }

  const handleClick = () => {
    //Requisição GET
    //axios.get("http://localhost:4000/produto").then(cb);

    //Envio de um produto via POST
    let novo = {
      nome: "Biscoito Calipso",
      unidade: "Pacote"
    }

    //No post, o segundo parâmetro é o corpo da requisição
    axios.post("http://localhost:4000/produto", novo).then(cb);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>Novo produto</button>
      </header>
    </div>
  )
}

export default App