import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Carrinho from "./Carrinho";
import BarraMenu from "./BarraMenu";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Alert from "@material-ui/lab/Alert";

function App() {
  const [livros, setLivros] = React.useState([]);
  const [carrinho, setCarrinho] = React.useState([]);
  const [alerta, setAlerta] = React.useState(false);

  //Documentação = escrever algo com clareza
  React.useEffect(() => {
    axios.get("http://localhost:4000/livro").then((response) => setLivros(response.data));
  }, []);

  const addCarrinho = (livro) => {
    setCarrinho((anterior) => [...anterior, livro]);
    setAlerta(true);
    //axios.post("/pedido", livro).then()
  };

  return (
    <div className="App">
      <BarraMenu />
      <header className="App-header">
        <Carrinho total={carrinho.length} />
        <h1>📚 Livraria!</h1>
        {alerta && (
          <Alert severity="success" variant="filled">
            Livro foi adicionado!
          </Alert>
        )}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Autor</TableCell>
                <TableCell>Título</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {livros.map((livro) => (
                <TableRow>
                  <TableCell>{livro.autor}</TableCell>
                  <TableCell>{livro.titulo}</TableCell>
                  <TableCell>
                    <Button onClick={() => addCarrinho(livro)}>Add</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </header>
    </div>
  );
}

export default App;
