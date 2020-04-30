import React from "react";
import CardOverlay from "./CardOverlay";
import styles from "./cardStyle.module.css";

export default class Card extends React.Component {
  render() {
    const { src, altDesc, json, setRef } = this.props;
    return (
      <figure
        className={styles.wrapper}
        ref={(el) => {
          if (setRef) {
            setRef(el);
          }
        }}
      >
        <div className={styles.card}>
          <img src={src} alt={altDesc} className={styles.image} />
          <div className={styles.informationOverlay}>
            <CardOverlay json={json} />
          </div>
        </div>
      </figure>
    );
  }
}
