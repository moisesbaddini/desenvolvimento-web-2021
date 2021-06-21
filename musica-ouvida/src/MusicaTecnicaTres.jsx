import React from "react";

function Musica(props) {
  const { nome, ouvi } = props;

  const estiloVerde = {
    listStyleType: "none",
    background: "green",
    margin: 20,
  };
  const estiloVermelho = {
    listStyleType: "none",
    background: "red",
    margin: 20,
  };

  return (
    <li style={ouvi ? estiloVerde : estiloVermelho}>
      Nome: {nome}
      <br />
      {ouvi && "Já ouvi sim!"}
      {ouvi || "Não ouvi"}
      {/* admin && <PaginaAdmin /> */}
    </li>
  );
}

export default Musica;
