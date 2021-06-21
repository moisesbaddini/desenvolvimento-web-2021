import React, { useState } from "react";

function ItemLista(props) {
  const { item } = props;
  //Esse console.log irá demonstrar a nova renderização desse componente
  console.log("ItemLista " + item);
  return <li>{item}</li>;
}

function Academia(props) {
  //O retorno do método useState é um array: o ESTADO
  const estadoReactParaAparelhos = useState([
    "Supino",
    "Esteira",
    "Leg Press",
    "Cadeira extensora",
    "Adutor",
    "Abdutor",
  ]);

  //Esse meu array contém 2 itens
  //Posição zero do estado == valor do estado
  //Armazeno em variável local
  let aparelhos = estadoReactParaAparelhos[0];

  //Segunda informação dentro do estado == função setter : de atualização
  const setAparelhos = estadoReactParaAparelhos[1];

  console.log("Renderizando Academia");

  const handleClick = () => {
    console.log("Add bicicleta");

    //Essa modificação é local!! não está influenciando o estado
    //aparelhos.push("Bicicleta");
    //console.log(aparelhos);

    //overloads:
    //1. recebe um valor
    //2. recebe um callback

    let novo = [];
    novo = novo.concat(aparelhos);
    novo.push("Bicicleta");

    setAparelhos(novo);
  };

  return (
    <div className={props.className}>
      <h1>Academia</h1>
      <h4>Aparelhos!</h4>

      <button onClick={handleClick}>Novo aparelho</button>

      <ul>
        {/*
         Iterador forEach: sem retorno
         Iterador map : retorno um novo array
         Portanto, a linha abaixo retorna um novo array de elementos ItemLista 
        */}
        {aparelhos.map((item) => (
          <ItemLista key={item} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Academia;
