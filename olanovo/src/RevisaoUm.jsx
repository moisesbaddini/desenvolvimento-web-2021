import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//var, let e const
var nome = "Zepa";
let sobrenome = "Silva";
const braya = "Braya";

nome = "outro";
//nova atribuição em constante inválida
//braya = "sim";

//funções - identificador, parâmetros, retorno
function saudacao(aQuem) {
  var imagem = document.getElementById("figurinha");
  console.log("voltei!");
  return "ok";
}

//chamada da função
saudacao("a mandioca");
saudacao();
saudacao();
saudacao();
saudacao();

//concatenação de strings
var falai = "Olá " + "Maria" + " " + "whatsup?";
nome = "Maria";

//interpolação - template literals
falai = `Olá ${2 + 2} whatsup?
    Quebra de linha continua na string`;

//ReactDOM.render(falai, document.getElementById("root"));

//Datas
let hoje = new Date();
hoje.setHours(8);

//ReactDOM.render(hoje.toLocaleString(), document.getElementById("root"));

//Operador ternário vs if
/**
 var queu = nome !== "" ? `` : false;
 if (condicao) true; else false;
 */

var teste = nome == "" ? "Olá pessoa!" : `Olá ${nome} ;)`;
//ReactDOM.render(teste, document.getElementById("root"));

//Expressões condicionais
let resposta;
nome = "";

//Tabela verdade OR
resposta = nome || "braya";
//Tabela verdade AND
resposta = nome && "braya";

nome = "zando";
resposta = nome || "braya";
resposta = nome && "braya";
//ReactDOM.render(resposta, document.getElementById("root"));

//Objetos - object literal "chaves"
var novo = {};

var aluno = { nome: "Matheus" };
//notação de ponto
aluno.sobrenome = "Soares";
aluno.telefone = "1234";
//notação de colchetes
aluno["telefone"] = "5678";

var ver = "sobrenome";

var exibir = `Nome: ${aluno.nome} | Sobre: ${aluno.sobrenome}`;
//ReactDOM.render(exibir, document.getElementById("root"));

//Arrays
//String guardaRoupa = new ArrayList<String>();
let guardaRoupa = ["Chinelo", "Gravata"];

guardaRoupa[0] = "Camiseta";
guardaRoupa[3] = "Shorts";

guardaRoupa.push("bermuda");
guardaRoupa.push(42);

let alu = { nome: "Bernard", altura: 2.3 };
guardaRoupa.push(alu);

let elemento = guardaRoupa[6];

//for..of
for (let a of guardaRoupa) console.log(a);

ReactDOM.render(elemento.altura, document.getElementById("root"));
