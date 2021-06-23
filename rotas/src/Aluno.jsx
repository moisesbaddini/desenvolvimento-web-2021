import React from "react";
import { Link, useParams } from "react-router-dom";

function Aluno() {
  const { nome } = useParams();

  return (
    <div>
      <h1>Página do estudante</h1>
      <Link to="/">Retornar a Home</Link>

      <p>
        <h2>Bem-vindo {nome}</h2>
      </p>
    </div>
  );
}

export default Aluno;
