import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHistory,
  faSearch,
  faHeart,
  faHamsa,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <div className="container-fluid mainWrapper">
      <Link to="/" className="logoWrapper">
        <FontAwesomeIcon icon={faHamsa} />
        <span className="logoText">unsplash_interface</span>
      </Link>
      <div className="navigation">
        <Link to="/search" className="navigation-button">
          <FontAwesomeIcon color="white" icon={faSearch} />
          <span>Поиск</span>
        </Link>
        <Link to="/favorites" className="navigation-button">
          <FontAwesomeIcon color="white" icon={faHeart} />
          <span>Избранное</span>
        </Link>
        <Link to="/history" className="navigation-button">
          <FontAwesomeIcon color="white" icon={faHistory} />
          <span>История поиска</span>
        </Link>
      </div>
    </div>
  );
};

export default AppHeader;
