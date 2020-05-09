import React, { useState } from "react";
import Preloader from "./../Preloader/Preloader";
import styles from "./ImgWithPreloader.module.css";


const ImgWithPreloader = ({src}) => {
  const [isImageLoaded, setState] = useState(false);

  return (
    <>
      <img
        className={styles.photo}
        display
        src={src}
        alt="."
        onLoad={() => {
          setState(true);
        }}
        style={
          isImageLoaded ? { display: "block" } : { display: "none" }
        }
      />
      <div className={styles.preloader}>
        {isImageLoaded === false ? <Preloader /> : null}
      </div>
    </>
  );
};
export default ImgWithPreloader;
