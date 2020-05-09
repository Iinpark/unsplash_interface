import React from "react";
import styles from "./preloader.module.scss";

const Preloader = () => {
  return (
    <div className={styles.wrapper}>
      <div class={styles.loader}>
        <div class={styles.loader__bar}></div>
        <div class={styles.loader__bar}></div>
        <div class={styles.loader__bar}></div>
        <div class={styles.loader__bar}></div>
        <div class={styles.loader__bar}></div>
        <div class={styles.loader__ball}></div>
      </div>
    </div>
  );
};
export default Preloader;
