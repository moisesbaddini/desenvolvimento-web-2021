import React from "react";
import styled from "styled-components";

const Pagina = styled.div`
  background: ${(props) => (props.escuro ? "#111" : "#ccc")};
  color: ${(props) => (props.escuro ? "#fff" : "#001")};
  min-height: 100vh;
  padding: 20px;
`;

export default Pagina;
