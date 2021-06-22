import React, { useState } from 'react'
import './App.css'
import axios from "axios";
import Votar from './Votar';

function App() {
  const [produtos, setProdutos] = React.useState([{id: 0, nome: "Teste", unidade: "kilo"}]);

  const tdEstilo = {
    border: "1px solid #ddd",
    padding: "8px"
  }

  const obterProdutos = () => {
    //requisição GET ao backend
    axios.get("http://localhost:4000/voto").then((response) => {
      console.log(response.status);
      console.log(response.data);

      /*
      let votos = response.data;
      votos = votos.filter((v) => (v.voto || "").toLowerCase() === "pratica");
      setProdutos(votos);
      */

      setProdutos(response.data);
    })
  }

  React.useEffect(obterProdutos, []);

  const apagarPorId = (id) => {
    axios.delete(`http://localhost:4000/voto/${id}`).then(response => alert(`apaguei o id ${id}`));
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Votar />
        </p>

        <h2>Lista de Votos</h2>
        <h3>Total: {produtos.length}</h3>

        <table style={tdEstilo}>
          <tr>
            <th>Nome</th>
            <th>Voto</th>
            <th></th>
          </tr>
        {produtos.map(item => (
                    <tr key={item.id}>
                    <td style={tdEstilo}>{item.id}</td>
                    <td style={tdEstilo}>{item.nome}</td>
                    <td style={tdEstilo}>{(item.voto || "").toLowerCase()}</td>
                    <td><button onClick={() => apagarPorId(item.id)}>Apagar</button></td>
                  </tr>
        ) )}
        </table>
      </header>
    </div>
  )
}

export default App
