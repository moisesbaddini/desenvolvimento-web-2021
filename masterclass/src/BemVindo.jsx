import React from "react";

function BemVindo() {
  //é valido aqui também

  let imagem = {
    width: 200,
    height: 200,
  };

  return (
    <div>
      <h1>Bem vindo!! aos componentes.</h1>
      <p> Estamos dentro do componente</p>
      <b>2 + 2 = {2 + 2}</b>
      <p>Imagem aqui</p>
      <img
        style={imagem}
        alt="Se arrependimento matasse.."
        src="https://upload.wikimedia.org/wikipedia/commons/0/09/Kumba_at_Busch_Gardens_Tampa.JPG"
      />
    </div>
  );
}

export default BemVindo;
