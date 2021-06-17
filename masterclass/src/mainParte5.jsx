import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//implementação
function meuBotao() {
  let nome = prompt("tem que ser visual");
  alert("você digitou " + nome);
}

var botao = (
  <button type="button" onClick={meuBotao}>
    Clique aqui
  </button>
);

ReactDOM.render(botao, document.getElementById("root"));
