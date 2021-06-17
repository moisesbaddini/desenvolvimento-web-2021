import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const alunos = ["Jéssica", "Maria", "Luan", "Giovanne", "Bernard", "Karine"];

const alunoRender = [];

for (let aluno of alunos) {
  let el = <li key={aluno}>{aluno}</li>;
  alunoRender.push(el);
}

let elemento = <ul>{alunoRender}</ul>;

ReactDOM.render(elemento, document.getElementById("root"));
