import React, { useContext } from "react";
import context from "../../provider/context";
import "./style.css";

function Product({ product }) {
  const { setCart, cart, formatCurrency } = useContext(context);
  const addToCart = () => {
    setCart([...cart, product]);
  };
  return (
    <div className="product">
      <img
        className="image-product product-info"
        src={product.image}
        alt="product"
      />
      <p className="product-info">{product.name}</p>
      <p className="product-info score">Score: {product.score}</p>
      <p className="product-info price">{formatCurrency(product.price)}</p>
      <button className="btn-add-cart" onClick={addToCart}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default Product;
