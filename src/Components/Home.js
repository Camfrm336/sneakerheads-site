import React from "react";
import airmags from "../images/airmags.png";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.homeTitle}>Bring Your Shoe Collection to Life</h1>
      </div>
      <div>
        <img
          alt="Air Mags"
          style={{ paddingRight: "3vw" }}
          src={airmags}
          className={styles.homeImg}
        ></img>
      </div>
    </div>
  );
};

export default Home;
