import React from "react";
import placeholderImage from "./../../images/empty_placeholder.png";
import placeholderStyles from "./placeholder.module.css";

const Placeholder = () => {
  return (
    <div className={placeholderStyles.placeholderWrapper}>
      <div>
        <img
          src={placeholderImage}
          alt="placeholder"
          className={placeholderStyles.placeholder}
        />
      </div>
    </div>
  );
};
export default Placeholder;
