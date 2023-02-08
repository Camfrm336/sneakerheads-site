import React from "react";
import CheckoutCard from "./CheckoutCard";
import styles from "../styles/CheckoutPage.module.css";

const CheckoutPage = (props) => {
  if (props.cartItems.length == 0) {
    return (
      <div className={styles.checkout}>
        <div style={{ marginTop: "5rem" }} className={styles.itemsContainer}>
          Your Cart is Currently Empty
        </div>
      </div>
    );
  }

  const deleteCartItemHandler = (id, price) => {
    props.deleteCartItemHandler(id, price);
  };
  const renderCartItems = props.cartItems.map((item) => {
    return (
      <CheckoutCard
        key={item.id}
        cartItem={item}
        deleteCartItem={deleteCartItemHandler}
      />
    );
  });

  const handleCheckoutClick = () => {
    alert("This is a fake website silly you can't buy anything :)");
  };
  return (
    <div className={styles.checkout}>
      <h2>Your Cart</h2>

      <div className={styles.itemsContainer}>{renderCartItems}</div>
      <div style={{ marginTop: "20px" }}>Total: ${props.total}</div>
      <div>
        <button onClick={handleCheckoutClick} className={styles.checkoutButton}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
