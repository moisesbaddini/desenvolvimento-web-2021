import React from "react";

//componentes de classe, por herança, já possuem states, props, eventos.
class Principal extends React.Component {
  sobrenome = "";

  constructor(props) {
    super(props);

    setState({ hoje: 22 });
  }

  render() {
    return (
      <>
        <h1>Olá mundo componente classe</h1>
        {/* <h2>{this.props.dia}</h2>
        <h3>{this.state.hoje}</h3>*/}
      </>
    );
  }
}

export default Principal;

/*

class Aluno {
  constructor (nome, nota1, nota2) {
    this.nome = nome;
    this.nota1 = nota1;
    this.nota2 = nota2;
  }
}

//instanciando um objeto, de uma classe convencional
let tai = new Aluno("Karine", 80.6, 31.5);
*/
