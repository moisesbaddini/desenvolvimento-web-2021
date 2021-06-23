import React, { useState } from "react";
import "./App.css";

//importando o styled-components
import styled from "styled-components";

/* Espaço reservado para demostração de JavaScript

function cumprimentar(texto, nome) {
  let numero = 42;
  return typeof numero;
  return texto + " " + nome;
}

let nome = "Marcelo";

//Chamada tradicional
//let resposta = cumprimentar("Olá", nome);

//Chamada com tags
let resposta = cumprimentar`Olá novo ${nome}`;

console.log(resposta);

/* Fim do espaço */

/* Novo componente, utilizando arrow function
const Patria = () => {
  return `string ${6 + 6} fim`;
};
*/

//Novo componente, baseado em styled
//const Patria = styled.div("background-color: green;");

const Patria = styled.div`
  background-color: #0f0;
  color: #ff0;
  margin: 10px;
  padding: 20px;
  border: 2px solid #000;
`;

//Componente Img
const Img = styled.img`
  width: 150px;
  height: 150px;
  border: 3px solid #f00;
`;

const ImgBichinho = styled.img`
  border: 4px solid #f00;
  width: 100px;
`;

//Componente App convencional
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Brasil</div>
        <Patria>
          <h1>Meu componente</h1>
        </Patria>
        <Patria>outra chamada</Patria>
        <Patria>mais Brasil</Patria>
        <Img src="https://organicossaocarlos.com.br/wp-content/uploads/2019/07/morango.jpg" />
        <ImgBichinho src="https://organicossaocarlos.com.br/wp-content/uploads/2019/07/morango.jpg" />
      </header>
    </div>
  );
}

export default App;
