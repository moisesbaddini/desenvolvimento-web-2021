import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [fazenda, setFazenda] = useState([]);

  const handleAtualizar = () => {
    let novo = { apelido: "Alazão" };
    axios
      .put("http://localhost:4000/fazenda/2", novo)
      //Atrasada, assíncrona, posterior
      .then((response) => alert(`novo objeto: ${response.data}`))
      //tratamento
      .catch((response) => console.log(response));
  };

  const handleObter = () => {
    //Esse token foi armazenado por você em cookie, ou local storage
    //const token = "BGF4567gfhgfY76i8yretret$RTGGFDty45TYergwryt";

    //SELECT api-token FROM localStorage
    let token = localStorage.getItem("api-token");
    console.log("token", token);

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios.get("http://localhost:4000/fazenda", config).then((response) => setFazenda(response.data));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1></h1>
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>

        <p>
          <button onClick={handleAtualizar}>Atualizar o cavalo</button>
        </p>
        <p>
          <button onClick={handleObter}>Carregar os animais</button>
          <p>
            {fazenda.map((bicho) => (
              <p>{bicho.id}</p>
            ))}
          </p>
        </p>
      </header>
    </div>
  );
}

export default App;
