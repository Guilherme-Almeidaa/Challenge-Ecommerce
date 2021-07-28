import React, { useContext } from "react";
import context from "../../provider/context";

function Product({ product }) {
  const { setCart, cart, formatCurrency } = useContext(context);
  const addToCart = () => {
    setCart([...cart, product]);
  };
  return (
    <div>
      <img src={product.image} alt="product" />
      <p>Nome:{product.name}</p>
      <p>Preço:{formatCurrency(product.price)}</p>
      <p>Score:{product.score}</p>
      <button onClick={addToCart}>Adicionar ao Carriho</button>
    </div>
  );
}

export default Product;
