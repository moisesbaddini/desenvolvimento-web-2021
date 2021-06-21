import React from "react";

function Musica(props) {
  const { nome, ouvi } = props;

  return (
    <li style={{ background: "green" }}>
      Nome: {nome}
      <br />
      Já ouvi? {ouvi.toString()}
    </li>
  );
}

export default Musica;
