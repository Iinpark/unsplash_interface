import React from "react";
import styles from "./textListItem.module.css";

const TextListItem = ({ itemTitle, doSearchFromKeyword }) => {
  return (
    <li className={styles.listItem}>
      <button
        onClick={() => {
          doSearchFromKeyword(itemTitle);
        }}
      >
        {itemTitle}
      </button>
    </li>
  );
};

export default TextListItem;
