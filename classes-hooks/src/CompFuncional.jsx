import React from "react";

//São equivalentes os componentes de classe ou de função

//Stateless
//um componente funcional não armazena estados
//Solução React para armazenar estados E OUTROS recursos é chamada de

/*
_                 _        
 | |               | |       
 | |__   ___   ___ | | _____ 
 | '_ \ / _ \ / _ \| |/ / __|
 | | | | (_) | (_) |   <\__ \
 |_| |_|\___/ \___/|_|\_\___/
*/

//Componente de classe: ciclo de vida
//Hook (componente de função): Efeito colateral

function CompFuncional(props) {
  //useState é um Hook
  //Hook para armazenar estados
  let [nome, setNome] = React.useState("Fim da explicação");
  let minha = "local";

  console.log("raiz do componente");

  React.useEffect(() => {
    console.log("Passei no efeito colateral");
    //API
  });

  return (
    <>
      <h1>Olá mundo componente funcional</h1>
      <h2>Hoje é dia {props.diaDeHoje}</h2>
    </>
  );
}

export default CompFuncional;
