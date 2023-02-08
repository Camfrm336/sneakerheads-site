import React from "react";
import styles from "../styles/Header.module.css";
import { Link } from "react-router-dom";
import bag from "../images/shoppingbag.svg";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <Link
        to="/"
        className={styles.leftItems}
        style={{ textDecoration: "none", color: "black", fontSize: "20px" }}
      >
        <h1>SneakerHeads</h1>
      </Link>
      <div className={styles.rightItems}>
        <Link
          className={styles.underline}
          to="/"
          style={{ textDecoration: "none", color: "black", fontSize: "20px" }}
        >
          Home
        </Link>
        <Link
          className={styles.underline}
          to="/products"
          style={{ textDecoration: "none", color: "black", fontSize: "20px" }}
        >
          Products
        </Link>

        <Link to="/checkout" className={styles.wrapper}>
          <img src={bag} className="fa" style={{ height: "20px" }} />
          <span> {props.bagItems} </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
