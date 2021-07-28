import React from "react";

function HeaderFilters({ setFilter, order, setOrder }) {
  return (
    <div>
      <div>
        <select onChange={({ target }) => setOrder(target.value)} value={order}>
          <option value="growing">Crescente</option>
          <option value="decreasing">Decrescente</option>
        </select>
      </div>
      <div>
        <label htmlFor="score">
          <input
            onChange={({ target }) => setFilter(target.value)}
            type="radio"
            name="filter"
            value="score"
            id="score"
          />
          Score
        </label>
        <label htmlFor="name">
          <input
            type="radio"
            onChange={({ target }) => setFilter(target.value)}
            name="filter"
            value="name"
            id="name"
          />
          Alfabética
        </label>
        <label htmlFor="price">
          <input
            type="radio"
            onChange={({ target }) => setFilter(target.value)}
            name="filter"
            value="price"
            id="price"
          />
          Preço
        </label>
      </div>
    </div>
  );
}

export default HeaderFilters;
