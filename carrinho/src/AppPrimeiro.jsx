import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Carrinho from "./Carrinho";

function App() {
  const [livros, setLivros] = React.useState([]);
  const [carrinho, setCarrinho] = React.useState([]);

  //Documentação = escrever algo com clareza
  React.useEffect(() => {
    axios.get("http://localhost:4000/livro").then((response) => setLivros(response.data));
  }, []);

  const addCarrinho = (livro) => {
    setCarrinho((anterior) => [...anterior, livro]);
    //axios.post("/pedido", livro).then()
  };

  return (
    <div className="App">
      <header className="App-header">
        <Carrinho total={carrinho.length} />
        <h1>📚 Livraria!</h1>
        <table>
          <thead>
            <th>Autor</th>
            <th>Título</th>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <tr>
                <td>{livro.autor}</td>
                <td>{livro.titulo}</td>
                <td>
                  <button onClick={() => addCarrinho(livro)}>Add</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
