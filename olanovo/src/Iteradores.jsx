import ReactDOM from "react-dom";

let alunos = [];
alunos.push("Mateus Faria");
alunos.push("Everton Davi");
alunos.push("Gabriel Gaspar");
alunos.push("Jéssica Sampaio");
alunos.push("Karina Branco");
alunos.push("Luiz Felipe");
alunos.push("Giovane Menezes");
alunos.push("Larissa Delgado");
alunos.push("Luan Figueiras");
alunos.push("Nathan Sá");
alunos.push("Marcelo Filho");
alunos.push("Maicon Zinho");
alunos.push("Rafael Rapozo");
alunos.push("Amanda Rios");
alunos.push("Alice Péricles");
alunos.push("Gustavo Lima");
alunos.push("Stefany Soares");
alunos.push("Mariana di Camargo");
alunos.push("Erick Kent");
alunos.push("João Vitor");
alunos.push("Luiz Carlos");
alunos.push("Ericson Rodrigues");
alunos.push("Tatiana Monteiro");
alunos.push("Bernardo Muniz");
alunos.push("Maria Regina");

//O que um iterador espera como parâmetro
//R. O código de uma função - não é chamada de função

//Função SEM retorno, será chamada a cada elemento do iterador .forEach
function presenca(nome) {
  console.log(`Presente: ${nome}`);
}

//Iterador forEach
alunos.forEach(presenca);

//for tradicional, com a mesma finalidade
for (let i = 0; i < alunos.length; i++) {
  let nome = alunos[i];
  presenca(nome);
}

//Função COM retorno, será chamada pelo .map
//seu retorno será a saída do iterador
function maiusculas(item) {
  return item.toUpperCase() + " ";
}

let resposta = alunos.map(maiusculas);

//Função COM retorno, será chamada pelo .filter
//Seu retorno será Boolean, indica permanência no array
function fica(nome) {
  //Onde encontrar a letra "t" na string nome
  let i = nome.indexOf("t");
  console.log(i);
  return i > -1;
  //return i == 0;

  //Fica quem tem nome com mais de 14 letras
  //return nome.length >= 14;
}

let resposta = alunos.filter(fica);

//Função COM retorno, será chamada pelo .find
//Seu retorno será Boolean, o primeiro item que atender ao critério
function encontrar(nome) {
  return nome == "Karina Branco";
}

let achou = alunos.find(encontrar);

ReactDOM.render(achou, document.getElementById("root"));
