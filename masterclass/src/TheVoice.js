const ler = require("prompt-sync")();
const aluno = [];

aluno.push("Alice");
aluno.push("Amanda");
aluno.push("André");
aluno.push("Bernardo");
aluno.push("Daniel");
aluno.push("Erick");
aluno.push("Everton");
aluno.push("Gabriel");
aluno.push("Gabriela");
aluno.push("Giovane");
aluno.push("Giulia");
aluno.push("Gustavo");
aluno.push("Jéssica");
aluno.push("João Victor");
aluno.push("Karine");
aluno.push("Larissa");
aluno.push("Luan");
aluno.push("Luana");
aluno.push("Luís");
aluno.push("Luiz");
aluno.push("Luiz Eduardo");
aluno.push("Maicon");
aluno.push("Marcelo");
aluno.push("Maria");
aluno.push("Mariana");
aluno.push("Matheus");
aluno.push("Natan");
aluno.push("Raphael");
aluno.push("Stephane");
aluno.push("Taiana");
aluno.push("Werikson");

//The voice
let duplas = [];

function sorteador(total) {
  let aleatorio = Math.random();
  let numero = Math.floor(aleatorio * total);
  return numero;
}

const sorteados = [];

for (let nome of aluno) {
  let nro = 0;

  //Controle para excluir número já sorteados
  do {
    nro = sorteador(aluno.length);
  } while (sorteados.indexOf(nro) > -1);

  sorteados.push(nro);

  //Uso o número sorteado = Pegar o nome da lista de alunos no índice sorteado
  nome = aluno[nro];
  console.log(nome);

  //Primeiro a dupla, depois o time
  let dupla = ler("Quem é sua dupla? ");
  duplas.push({ nome, dupla });
}

console.log(aluno.length);
