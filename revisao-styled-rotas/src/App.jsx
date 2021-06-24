import React, { useState } from "react";
import "./App.css";
import Perfil from "./Perfil";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

function App() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [alerta, setAlerta] = useState("");
  const [clientes, setClientes] = useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:4000/clientes").then((r) => setClientes(r.data));
  }, [alerta]);

  //Assíncrono
  //Segundo momento - acontece depois (then)
  const promessaCumprida = (respostaDoServidor) => {
    console.log(new Date());
    console.log(respostaDoServidor.status);
    console.log(respostaDoServidor.data);
  };

  const handleClick = () => {
    let novo = {
      nome: "Luisim",
      cpf: "1234567-89",
    };

    //Promessa
    let chamadaApi = axios.post("http://localhost:4000/clientes", novo);
    console.log("isso aqui é sequencial");
    console.log(new Date());
    //Aguardar
    chamadaApi.then(promessaCumprida);
    console.log("seta um state");
  };

  const limpar = () => {
    setNome("");
    setCpf("");
  };

  const handleCadastrar = (e) => {
    e.preventDefault();

    let novo = {
      nome,
      cpf,
    };
    axios.post("http://localhost:4000/clientes", novo).then((r) => {
      setAlerta(`Cadastrado com o id ${r.data.id}`);
      limpar();
    });
  };

  return (
    <BrowserRouter>
      <menu>
        Acessar <Link to="/perfil/braya">Meu perfil</Link>
      </menu>

      <form onSubmit={handleCadastrar}>
        <input
          type="text"
          name="nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          placeholder="Nome do cliente"
        />
        <div>
          <input
            type="text"
            name="cpf"
            value={cpf}
            onChange={(event) => setCpf(event.target.value)}
            placeholder="Documento"
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>

      {alerta && <h2 style={{ background: "lime" }}>Sucesso! {alerta}</h2>}

      {/* <button onClick={handleClick}>Add na API</button> */}

      <h3>Clientes</h3>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>{cliente.nome}</li>
        ))}
      </ul>

      <Switch>
        <Route path="/perfil/:nome" component={Perfil} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
