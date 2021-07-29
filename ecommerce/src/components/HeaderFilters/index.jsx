import React from "react";
import "./style.css";

function HeaderFilters({ setFilter, order, setOrder }) {
  return (
    <div className="conteiner-header-filter">
      <div className="cont-select">
        <select
          className="select"
          onChange={({ target }) => setOrder(target.value)}
          value={order}
        >
          <option className="options" value="growing">
            Crescente
          </option>
          <option className="options" value="decreasing">
            Decrescente
          </option>
        </select>
      </div>
      <div className="container-orders-filter">
        <div className="cont-options">
          <input
            className="input-radio-filter"
            onChange={({ target }) => setFilter(target.value)}
            type="radio"
            name="filter"
            value="score"
            id="score"
          />
          <label className="label-filter" htmlFor="score">
            Score
          </label>
        </div>
        <div className="cont-options">
          <input
            className="input-radio-filter"
            type="radio"
            onChange={({ target }) => setFilter(target.value)}
            name="filter"
            value="name"
            id="name"
          />
          <label className="label-filter" htmlFor="name">
            Alfabética
          </label>
        </div>
        <div className="cont-options">
          <input
            className="input-radio-filter"
            type="radio"
            onChange={({ target }) => setFilter(target.value)}
            name="filter"
            value="price"
            id="price"
          />
          <label className="label-filter" htmlFor="price">
            Preço
          </label>
        </div>
      </div>
    </div>
  );
}

export default HeaderFilters;
