import React from "react";

function Dark() {
  const tema = {
    backgroundColor: "#222",
    color: "#ffe",
  };
  return (
    <div style={tema}>
      <h3>Essa é página "Tema Escuro"</h3>
      <em>Esse é o conteúdo da página Dark</em>
    </div>
  );
}

export default Dark;
