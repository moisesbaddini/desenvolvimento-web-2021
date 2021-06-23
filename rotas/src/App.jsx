import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import Sobre from "./Sobre";
import Aluno from "./Aluno";
import Inexistente from "./Inexistente";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

/*
let tipo = "professor";

switch (tipo) {
  case "aluno": <Aluno />; break;
  case "professor": <Professor />; break;
}
*/

function App() {
  console.log("Essa é o app");

  return (
    <div>
      <nav>⚽ Site de Futebol</nav>

      <BrowserRouter>
        <ol>
          <li>
            <Link to="/sobre">Sobre o curso</Link>
          </li>
          <li>
            <Link to="/aluno">Página do aluno</Link>
          </li>
        </ol>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/sobre">
            <Sobre />
          </Route>
          <Route path="/aluno/:nome" exact component={Aluno} />
          <Route path="*" component={Inexistente} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
