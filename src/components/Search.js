import React, { useState } from "react";
import "../styles/Search.css";
import { ProductList } from "./ProductList";
import { FilterForm } from "./FilterForm";

export const Search = (props) => {
  const [price, setPrice] = useState({ priceFrom: "", priceTo: "" });

  const filterProducts = props.products.filter((product) => {
    if (product.price >= price.priceFrom && product.price <= price.priceTo) {
      return product;
    } else if (price.priceFrom >= price.priceTo) {
      return product;
    }
  });

  const priceFrom = (pf) => {
    setPrice({ ...price, priceFrom: parseFloat(pf) });
  };
  const priceTo = (pt) => {
    setPrice({ ...price, priceTo: parseFloat(pt) });
  };

  return (
    <div className="Products">
      <FilterForm priceFrom={priceFrom} priceTo={priceTo} />
      <ProductList columns={""} products={filterProducts} />
    </div>
  );
};

export default Search;
