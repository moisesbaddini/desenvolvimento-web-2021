import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let musicas = [
  "Rain on Me",
  "Eu não gosto de ninguém",
  "Welcome To My Parents' House",
  "Dani california",
  "Backstreet Boys - I Want It That Way",
  "Otherside",
];

let pagina = (
  <ol>
    {musicas.map((musica) => (
      <li key={musica}>{musica}</li>
    ))}
  </ol>
);

ReactDOM.render(pagina, document.getElementById("root"));
