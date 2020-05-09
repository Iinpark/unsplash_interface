import React from "react";
import './preloader.scss'

const Preloader = () => {
  return (
    <>
      <div class="loader">
        <div class="loader__bar"></div>
        <div class="loader__bar"></div>
        <div class="loader__bar"></div>
        <div class="loader__bar"></div>
        <div class="loader__bar"></div>
        <div class="loader__ball"></div>
      </div>
    </>
  );
};
export default Preloader;
