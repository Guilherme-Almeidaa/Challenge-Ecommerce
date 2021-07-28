import React from "react";
import { Link } from "react-router-dom";

function ButtonCart() {
  return (
    <div>
      <Link to="/cart">Carrinho</Link>
    </div>
  );
}

export default ButtonCart;
