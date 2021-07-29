import React, { useContext } from "react";
import context from "../../provider/context";
import "./style.css";

function ItemCart({ item }) {
  const { formatCurrency, cart, setCart } = useContext(context);
  const removeItemCart = () => {
    const itemLeftover = cart.filter((product) => product.id !== item.id);

    setCart([...itemLeftover]);
  };
  return (
    <div className="item">
      <img className="image-item item-info" src={item.image} alt="item" />
      <h2 className="item-info">{item.name}</h2>
      <h2 className="item-info">{formatCurrency(item.price)}</h2>
      <div className="cont-btn">
        <button onClick={removeItemCart} className="btn-remove">
          Remover
        </button>
      </div>
    </div>
  );
}

export default ItemCart;
