import React from "react";
import ShoeCard from "./ShoeCard";

import styles from "../styles/Products.module.css";

const Products = (props) => {
  const renderShoeCards = props.shoes.map((shoe) => {
    return (
      <ShoeCard
        shoe={shoe}
        key={shoe.name}
        addToCartHandler={props.addToCartHandler}
        updateBagHandler={props.updateBagNumber}
        createCartItem={props.createCartItem}
      />
    );
  });

  return (
    <div>
      <div>
        <h1 className={styles.productTitle}>Sneakers</h1>
      </div>
      <div className={styles.products}>
        <div className={styles.productsContainer}>{renderShoeCards}</div>
      </div>
    </div>
  );
};

export default Products;
