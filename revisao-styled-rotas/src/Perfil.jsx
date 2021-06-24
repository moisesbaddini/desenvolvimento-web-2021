import React from "react";
import { useParams } from "react-router-dom";

function Perfil(props) {
  //Evento de montagem
  //componentDidMount()
  //efeito que só ocorre após a montagem
  //useEffect(callback, [])

  //Qualquer recurso necessário dentro de um componente funcional == Hooks
  const { nome } = useParams();

  return (
    <div>
      <h2>Área do cliente</h2>
      <h3>Bem vindo {nome}</h3>
    </div>
  );
}

export default Perfil;
