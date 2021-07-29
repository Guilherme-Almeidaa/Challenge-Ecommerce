import React, { useState, useEffect, useContext } from "react";
import HeaderFilters from "../../components/HeaderFilters";
import Product from "../../components/Product";
import data from "../../data/products.js";
import context from "../../provider/context";
import "./style.css";

function ProductsPage() {
  const { products, setProducts } = useContext(context);
  const [filter, setFilter] = useState("");
  const [order, setOrder] = useState("growing");
  const [isLoading, setIsLoading] = useState(false);
  const filterOrder = (products, filter, sort) => {
    if (sort === "growing")
      return products.sort((a, b) => {
        if (a[filter] > b[filter]) return 1;
        if (a[filter] < b[filter]) return -1;
        return 0;
      });
    if (sort === "decreasing")
      return products.sort((a, b) => {
        if (a[filter] < b[filter]) return 1;
        if (a[filter] > b[filter]) return -1;
        return 0;
      });
  };

  useEffect(() => {
    setIsLoading(true);
    setProducts([...filterOrder(data, filter, order)]);
    setIsLoading(false);
  }, [filter, order, setProducts]);

  console.log(products);

  return (
    <div>
      <HeaderFilters setOrder={setOrder} setFilter={setFilter} />
      <div className="container-products">
        {isLoading
          ? "Loading..."
          : products.map((product, index) => (
              <Product product={product} key={index} />
            ))}
      </div>
    </div>
  );
}

export default ProductsPage;
