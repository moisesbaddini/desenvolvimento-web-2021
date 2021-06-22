import React, { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [estados, setEstados] = React.useState([]);
  const [sigla, setSigla] = React.useState("");

  const obterMunicipios = () => {
    axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${sigla}/municipios`).then((response) => {
      console.log(response.data);
      setEstados(response.data);
    })
  }

  const handleChange = (e) => setSigla(e.target.value);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h2>Municípios do {sigla}</h2>
          <h3>Total de cidades: {estados.length}</h3>
          <input type="text" value={sigla} onChange={handleChange} />
          <button onClick={obterMunicipios}>Consultar</button>
          <ol>
            {estados.map((uf) => (
              <li key={uf.id}>{uf.nome}</li>
            )
            )}
          </ol>
        </p>
      </header>
    </div>
  )
}

export default App
