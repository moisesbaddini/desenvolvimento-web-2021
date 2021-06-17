import React from "react";

function InfoBrinquedo(props) {
  let item = props.item;

  return (
    <div>
      <p>Altura mínima: {item.altura}</p>
      <p>Preço: {item.preco}</p>
      <p>Capacidade: {item.capacidade}</p>
    </div>
  );
}

export default InfoBrinquedo;
