import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let dormindo = "dormindo";
let oi = "Oi Luiz, Maria";

let ausente = <span className="dormindo">Tá dormindo, né</span>;

let elementos = [
  "Bom dia",
  42,
  <h3>Cabeçalho h3</h3>,
  ausente,
  <p>
    <b>Daniel</b>
  </p>,
  <em>não lembra? itálico</em>,
];

var elemento = (
  <h2>
    Bom dia {oi} {ausente}
    <p className={dormindo}>oi + "!"</p>
    {<a href="pontocom">Link</a>}
    <div>{2 + 2}</div>
    <div>{elementos}</div>
  </h2>
);

ReactDOM.render(elemento, document.getElementById("root"));
