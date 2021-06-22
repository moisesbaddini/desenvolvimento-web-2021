import React, { useState } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [produtos, setProdutos] = React.useState([{id: 0, nome: "Teste", unidade: "kilo"}]);

  const tdEstilo = {
    border: "1px solid #ddd",
    padding: "8px"
  }

  const obterProdutos = () => {
    //requisição GET ao backend
    axios.get("http://localhost:4000/produto").then((response) => {
      console.log(response.status);
      console.log(response.data);

      setProdutos(response.data);
    })
  }

  React.useEffect(obterProdutos, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Lista de produtos</h2>
        <table style={tdEstilo}>
          <tr>
            <th>Nome</th>
            <th>Unidade</th>
          </tr>
        {produtos.map(item => (
                    <tr key={item.id}>
                    <td style={tdEstilo}>{item.nome}</td>
                    <td style={tdEstilo}>{item.unidade}</td>
                  </tr>
        ) )}
        </table>
      </header>
    </div>
  )
}

export default App
