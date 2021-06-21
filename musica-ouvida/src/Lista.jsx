import React from "react";
import Musica from "./Musica";

function Lista() {
  const [musicas, setMusicas] = React.useState([
    { id: 1, nome: "Recairei", ouvi: true },
    { id: 2, nome: "O golpe tái", ouvi: true },
    { id: 3, nome: "Domingo não vou", ouvi: true },
  ]);

  const [nome, setNome] = React.useState("");

  function cb(anterior) {
    //Retirar do array o último elemento
    let ultima = anterior.pop();
    ultima.ouvi = false;
    console.log(ultima);

    /*
    //Exemplo de um uso de filter
    let criterio = 3;
    let novo = anterior.filter((item) => item.id !== criterio);
    */

    return [...anterior, ultima];
  }

  const handleClick = (event) => {
    var elem = event.target;

    console.log("evento alvo", elem.name);

    //cb(musicas);
    console.log("vai mudar lista");
    setMusicas(cb);
  };

  function handleChange(event) {
    const campo = event.target;
    console.log(campo.value);
    setNome(campo.value);
  }

  const handleSalvar = () => {
    let novo = [...musicas, { id: 4, nome, ouvi: true }];
    //novo.push({ id: 4, nome, ouvi: true });
    setMusicas(novo);
  };

  return (
    <>
      <ul>
        {musicas.map((musica) => (
          <Musica key={musica.id} nome={musica.nome} ouvi={musica.ouvi} />
        ))}
      </ul>
      <button type="button" name="naoOuvi" onClick={handleClick}>
        Não ouvi ainda
      </button>

      <label htmlFor="name">Nome da nova música: </label>
      <input type="text" name="nome" onChange={handleChange}></input>
      <button onClick={handleSalvar}>Salvar</button>
      <h1>{nome}</h1>
    </>
  );
}

export default Lista;
