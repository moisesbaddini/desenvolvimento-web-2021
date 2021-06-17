import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let cor = {
  background: "tomato",
  width: "50px",
  border: "1px solid",
  margin: 20,
  padding: 10,
};

let colorido = (
  <p style={cor}>
    Aqui{" "}
    {/* comentário
  
  
  várias linhas
   */}{" "}
    um texto
  </p>
);

ReactDOM.render(colorido, document.getElementById("root"));
