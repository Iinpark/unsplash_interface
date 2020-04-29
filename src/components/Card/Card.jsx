import React from "react";
import CardOverlay from "./CardOverlay";
import styles from "./cardStyle.module.css";

const Card = ({ src, altDesc, json }) => {
  return (
    <figure className={styles.wrapper}>
      <div className={styles.card}>
        <img src={src} alt={altDesc} className={styles.image} />
        <div className={styles.informationOverlay}>
          <CardOverlay json={json} />
        </div>
      </div>
    </figure>
  );
};
export default Card;
