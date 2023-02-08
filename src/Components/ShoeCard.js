import React, { useState } from "react";
import styles from "../styles/ShoeCard.module.css";

const ShoeCard = (props) => {
  const [addAmount, setAddAmount] = useState(0);
  const [shoeSize, setShoeSize] = useState(7);
  const { id, src, name, price } = props.shoe;

  let numVal = React.createRef();

  const handleSizeChange = (e) => {
    e.preventDefault();
    setShoeSize(e.target.value);
  };

  const addToCart = (e) => {
    e.preventDefault();
    props.addToCartHandler(props.shoe);
    props.updateBagHandler();
    props.createCartItem(id, src, name, addAmount, price, shoeSize);
  };

  return (
    <div className={styles.card} shoe={props.shoe}>
      <img alt="SHOE" style={{ height: "150px" }} src={src}></img>
      <div>
        <div>
          <p style={{ color: "gray" }}>Air Jordan</p>
          <p>{name}</p>
        </div>
        <div>
          <h4>${price}</h4>
        </div>
        <div>
          <form onSubmit={addToCart}>
            <div className={styles.cardInput}>
              <div>
                <label>Size: </label>
                <select value={shoeSize} onChange={handleSizeChange}>
                  <option value="7">7</option>
                  <option value="7.5">7.5</option>
                  <option value="8">8</option>
                  <option value="8.5">8.5</option>
                  <option value="9">9</option>
                  <option value="9.5">9.5</option>
                  <option value="10">10</option>
                  <option value="10.5">10.5</option>
                  <option value="11">11</option>
                  <option value="11.5">11.5</option>
                  <option value="12">12</option>
                  <option value="12.5">12.5</option>
                  <option value="13">13</option>
                  <option value="13.5">13.5</option>
                  <option value="14">14</option>
                </select>
              </div>
              <button className={styles.addButton}>Add to Cart</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;
