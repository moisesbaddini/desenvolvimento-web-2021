import React, { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [estados, setEstados] = React.useState([]);
  
  React.useEffect(() => {
    const UF = "RJ";
    axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`).then((response) => {
      console.log(response.data);
      setEstados(response.data);
    })
  })

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h2>Municípios do RJ</h2>
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
