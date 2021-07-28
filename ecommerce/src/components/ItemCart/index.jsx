import React from "react";

function ItemCart({ item }) {
  return (
    <div>
      <img src={item.image} alt="item" />
      <p>Nome:{item.name}</p>
      <p>Preço:{`R$ ${item.price}`}</p>
      <p>Score:{item.score}</p>
    </div>
  );
}

export default ItemCart;
