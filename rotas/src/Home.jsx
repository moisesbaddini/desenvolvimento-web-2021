import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [alunos, setAlunos] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:4000/aluno").then((response) => setAlunos(response.data));
    console.log("teste");
  }, []);

  const verde = {
    color: "green",
  };
  const borda = { border: "1px solid black", padding: 8, textAlign: "left", borderBottom: "1px solid #ddd" };

  return (
    <header>
      <h1>Essa é a Home Page</h1>
      <h3 style={verde}>Alunos do curso React</h3>
      <table style={borda}>
        <thead>
          <tr>
            <th style={borda}>Nome</th>
            <th style={borda}>Presente</th>
            <th style={borda}>Rota com parâmetros</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno) => (
            <tr key={aluno.id}>
              <td style={borda}>{aluno.nome}</td>
              <td style={borda}>{aluno.presente ? "😀" : "😶"}</td>
              <td style={borda}>
                <Link to={`/aluno/${aluno.nome}`}>Ir para página</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </header>
  );
}

export default Home;
