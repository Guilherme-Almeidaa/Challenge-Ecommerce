import React from "react";
import { Link } from "react-router-dom";
import ButtonCart from "../ButtonCart";

function Header() {
  return (
    <header>
      <Link to="/">Voltar</Link>
      <ButtonCart />
    </header>
  );
}

export default Header;
