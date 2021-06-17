import React from "react";

function Menu(props) {
  return (
    <p>
      {" "}
      <b>Esse são os menus:</b> {props.children}
    </p>
  );
}

export default Menu;
