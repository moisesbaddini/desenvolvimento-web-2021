import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

var saudacao = (
  <div>
    <h2>Header 2</h2>
    <p>outro texto</p>
    <div id="conteudo">Conteúdo do site</div>
    <hr />
    <span className="titulo"></span>
    <label htmlFor="inputNome"></label>
    <textarea rows={2} />
  </div>
);

ReactDOM.render(saudacao, document.getElementById("root"));
