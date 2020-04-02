import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHistory,
  faSearch,
  faHeart,
  faHamsa
} from "@fortawesome/free-solid-svg-icons";

const AppHeader = () => {
  return (
    <div className="mainWrapper">
      <div className="logoWrapper">
        <FontAwesomeIcon icon={faHamsa}  />
        <span className="logoText"> Image Stock</span>
      </div>
      <div className="navigation">
        <div className="navigation-button">
          <FontAwesomeIcon color="white" icon={faSearch} />
          <span>Поиск</span>
        </div>
        <div className="navigation-button">
          <FontAwesomeIcon color="white" icon={faHeart} />
          <span>Избранное</span>
        </div>
        <div className="navigation-button">
          <FontAwesomeIcon color="white" icon={faHistory} />
          <span>История поиска</span>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
