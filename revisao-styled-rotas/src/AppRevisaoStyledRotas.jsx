import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Perfil from "./Perfil";

const Botaozim = styled.button`
  background-color: yellow;
  color: red;
  font-size: 12pt;
  cursor: ${(props) => (props.desabilitado ? "not-allowed" : "pointer")};
  &: hover {
    background-color: blue;
  }
`;

const Painel = styled.div`
  background-color: green;
  color: red;
  font-size: 12pt;
  margin: 20px;
`;

function App() {
  const [count, setCount] = useState(0);
  const [autenticado, setAutenticado] = React.useState(false);

  return (
    <BrowserRouter>
      <menu>
        Acessar <Link to="/perfil">Meu perfil</Link>
      </menu>
      <Painel>
        <Botaozim>Botão personalizado</Botaozim>
        <Botaozim desabilitado>Novo botão</Botaozim>
        <Botaozim onClick={() => setAutenticado(true)}>Login (está logado? {autenticado ? "sim" : "não"}</Botaozim>
      </Painel>

      <Switch>
        {/* <Route path="/revisao" component={Revisao}>
        <Revisao />
      </Route> */}

        <Route path="/revisao" render={() => <h2>Esse é o componente revisão, e rota também</h2>} />
        <Route path="/perfil" render={() => (autenticado ? <Perfil /> : <h3>Faça o login</h3>)} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
