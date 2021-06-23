import React from "react";
import styled from "styled-components";

const Botao = styled.button`
  background: ${(props) => (props.escuro ? "chocolate" : "white")};
  color: ${(props) => (props.escuro ? "white" : "chocolate")};

  font-size: ${(props) => (props.escuro ? props.tamanho + "px" : "11px")};

  margin: 8px;
  padding: 0.25em 1em;
  border: 2px solid chocolate;
  border-radius: 3px;
`;

export default Botao;
