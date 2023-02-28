import React from "react";

export const FilterForm = (props) => {
  // TODO: bind handlers and props
  const priceFrom = (e) => {
    props.priceFrom(e.target.value);
  };

  const priceTo = (e) => {
    props.priceTo(e.target.value);
  };

  return (
    <div>
      <label htmlFor="priceFrom">Price From:</label>
      <input
        type="number"
        id="priceFrom"
        name="priceFrom"
        placeholder="Price from..."
        onChange={priceFrom}
      />
      <label htmlFor="priceTo">Price To:</label>
      <input
        type="number"
        id="priceTo"
        name="priceTo"
        placeholder="Price to..."
        onChange={priceTo}
      />
    </div>
  );
};
