import React from "react";
import styles from "../styles/CheckoutCard.module.css";
import trash from "../images/trash.svg";

const CheckoutCard = (props) => {
  const { id, src, name, price, shoeSize } = props.cartItem;
  return (
    <div className={styles.cardContainer}>
      <div>
        <img style={{ height: "60px", paddingTop: "10px" }} src={src} />
      </div>
      <div className={styles.cardInfo}>
        <h5>{name}</h5>
        <h6 style={{ fontSize: "12px" }}>Size: {shoeSize}</h6>
        <h6>${price}</h6>
      </div>
      <div style={{ paddingTop: "50px" }}>
        <img
          onClick={() => props.deleteCartItem(id, price)}
          style={{ height: "20px", cursor: "pointer" }}
          src={trash}
        />
      </div>
    </div>
  );
};

export default CheckoutCard;
