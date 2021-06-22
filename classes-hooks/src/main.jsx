import React from "react";
import ReactDOM from "react-dom";
import CompFuncional from "./CompFuncional";
import "./index.css";
import Principal from "./Principal";

//<Principal dia={"terça"} />
ReactDOM.render(
  <React.StrictMode>
    <CompFuncional diaDeHoje={"terça"} />
  </React.StrictMode>,
  document.getElementById("principal")
);
