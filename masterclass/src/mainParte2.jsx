import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

var elemento = (
  <>
    <p readOnly={true}>Bom dia {2 + 2} vamo acordando aí</p>
    <img src="https://miro.medium.com/max/3440/1*Rvs7u_g6dnDTRF-FMY4vsA.png" />
  </>
);

ReactDOM.render(elemento, document.getElementById("root"));
