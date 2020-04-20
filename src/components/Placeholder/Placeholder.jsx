import React from "react";
import placeholderImage from "./../../images/empty_placeholder.png";
import placeholderStyles from "./placeholder.module.css";

const Placeholder = () => {
  return (
    <div className={placeholderStyles.placeholderWrapper}>
      <img
        src={placeholderImage}
        alt="placeholder"
        className={placeholderStyles.placeholder}
      />
    </div>
  );
};
export default Placeholder;
