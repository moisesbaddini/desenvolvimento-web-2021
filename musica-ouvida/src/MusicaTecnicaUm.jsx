import React from "react";

function Musica(props) {
  const { nome, ouvi } = props;

  const estilo = {
    listStyleType: "none",
    background: "green",
    margin: 20,
  };

  //múltiplos retornos
  //Se minha condição foi atendida, retorno a renderização
  if (ouvi) {
    return (
      <li style={estilo}>
        Nome: {nome}
        <br />
        Já ouvi? {ouvi.toString()}
      </li>
    );
  }

  estilo.background = "red";

  return (
    <li style={estilo}>
      Nome: {nome}
      <br />
      Ainda não ouvi
    </li>
  );
}

export default Musica;
