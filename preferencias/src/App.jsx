import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Frutas from "./Frutas";
import Preferencias from "./Preferencias";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/preferencias" exact>
            <Preferencias />
          </Route>
          <Route path="/frutas" exact component={Frutas} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
