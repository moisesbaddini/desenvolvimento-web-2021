import React from "react";
import BemVindo from "./BemVindo";
import Atracoes from "./Atracoes";
import Menu from "./Menu";

function Principal() {
  return (
    <>
      <BemVindo />
      <Atracoes />
      <Menu>
        <h3>Home</h3>
        <h3>Sobre</h3>
        <h3>Fale conosco</h3>
      </Menu>
    </>
  );
}

export default Principal;
