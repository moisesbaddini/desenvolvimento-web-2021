import React from "react";
import Brinquedo from "./Brinquedo";

let atracoes = [
  { nome: "Montanha russa", altura: 1.6, preco: 30, capacidade: 22 },
  { nome: "Kabum", altura: 1.4, preco: 8.3, capacidade: 12 },
  { nome: "Carrinho bate bate ", altura: 1.2, preco: 6, capacidade: 20 },
  { nome: "Trem fantasma", altura: 1.5, preco: 30, capacidade: 10 },
  { nome: "Carrossel ", altura: 1.3, preco: 4, capacidade: 8 },
  { nome: "Roda gigante ", altura: 1.7, preco: 0, capacidade: 40 },
  { nome: "Fliperama", altura: 1.6, preco: 2, capacidade: 1 },
];

function Atracoes() {
  return (
    <div>
      <h2>Lista de atrações</h2>
      <ul>
        {atracoes.map((brinquedo) => (
          <Brinquedo nome={brinquedo.nome} item={brinquedo} cor="#dfc" />
        ))}
      </ul>
    </div>
  );
}

export default Atracoes;
