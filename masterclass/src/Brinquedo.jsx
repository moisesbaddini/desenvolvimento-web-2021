import React from "react";
import InfoBrinquedo from "./InfoBrinquedo";

function Brinquedo(props) {
  let estilo = {
    background: "#cdb",
    width: 150,
    padding: 3,
    margin: 2,
  };

  let nome = props.nome;
  estilo.background = props.cor;

  return (
    <li style={estilo} key={nome}>
      <p>{nome}</p>
      <InfoBrinquedo item={props.item} />
    </li>
  );
}

export default Brinquedo;
