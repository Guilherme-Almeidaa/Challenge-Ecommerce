import React, { useState, useEffect, useContext } from "react";
import HeaderFilters from "../../components/HeaderFilters";
import Product from "../../components/Product";
import data from "../../data/products.js";
import context from "../../provider/context";

function ProductsPage() {
  const { filterOrder, products, setProducts } = useContext(context);
  const [filter, setFilter] = useState("");
  const [order, setOrder] = useState("growing");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setProducts(filterOrder(data, filter, order));
    setIsLoading(false);
  }, [filter, order, filterOrder, setProducts]);

  console.log(products);

  return (
    <div>
      <HeaderFilters setOrder={setOrder} setFilter={setFilter} />
      <div>
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
