import React, { useContext } from "react";
import ItemCart from "../../components/ItemCart";
import context from "../../provider/context";

function CarPage() {
  const { cart, formatCurrency } = useContext(context);
  const totalPrice = cart
    .map((item) => item.price)
    .reduce((acc, sum) => acc + sum, 0);

  const shipping = totalPrice > 250 ? 0 : cart.length * 10;
  return (
    <div>
      <h1>Carrinho</h1>
      {cart.map((item, index) => (
        <ItemCart item={item} key={index} />
      ))}
      <p>Frete :{shipping !== 0 ? formatCurrency(shipping) : "Grátis"}</p>
      <p>SubTotal: {totalPrice}</p>
      <p>Total: {formatCurrency(totalPrice + shipping)}</p>
    </div>
  );
}

export default CarPage;
