import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../CartIcon";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <Link className="link-games" to="/">
        <h1>Games.com</h1>
      </Link>
      <Link className="link-cart" to="/cart">
        <CartIcon />
      </Link>
    </header>
  );
}

export default Header;
