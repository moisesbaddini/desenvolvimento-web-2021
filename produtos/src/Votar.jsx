import React from "react";
import axios from "axios";

function Votar() {
  const [nome, setNome] = React.useState("");
  const [voto, setVoto] = React.useState("pratica");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(nome);
    console.log(voto);

    //Objeto que será enviado para API
    let novo = { nome, voto };
    axios.post("http://localhost:4000/voto", novo).then(response => alert(`novo voto tem o id ${response.data.id}`));
  }

return (<>
    <h3>Vote na sua preferência:</h3>
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="nome">Seu nome:</label>
        <input type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
      </p>
      <p>
      <label htmlFor="nome">Seu Voto:
        <input type="radio" name="voto" value="pratica" onChange={(e) => setVoto(e.target.value)} /> <span>Prática</span>
        <input type="radio" name="voto" value="conteudo" onChange={(e) => setVoto(e.target.value)} /> <span>Conteúdo</span>
      </label>
      </p>
      <button type="submit">Votar!</button>
    </form>
  </>);
}

export default Votar;