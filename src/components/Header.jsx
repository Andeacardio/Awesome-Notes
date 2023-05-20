import React from "react";
import Time from "./Time";

function Header() {
  return (
    <header>
      <h1>Awesome Notes </h1>
      <p>{Time()}</p>
    </header>
  );
}

export default Header;
