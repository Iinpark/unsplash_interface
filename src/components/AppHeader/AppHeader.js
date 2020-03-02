import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHistory,
  faSearch,
  faHeart
} from "@fortawesome/free-solid-svg-icons";

const AppHeader = () => {
  const src =
    "https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg";
  return (
    <div className="mainWrapper">
      <div className="logoWrapper">
        <img className="logo" src={src} alt="logo" />
        <span className="logoText">Image Stock</span>
      </div>
      <div className="navigation">
        <div className='navigation-button'>
          <FontAwesomeIcon color="white" icon={faSearch} />
          <span>Поиск</span>
        </div>
        <div className='navigation-button'>
          <FontAwesomeIcon color="white" icon={faHeart} />
          <span>Избранное</span>
        </div>
        <div className='navigation-button'>
          <FontAwesomeIcon color="white" icon={faHistory} />
          <span>История поиска</span>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
