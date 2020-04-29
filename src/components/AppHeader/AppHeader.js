import React from "react";
import styles from "./AppHeader.module.css";
import "./activeStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHistory,
  faSearch,
  faHeart,
  faHamsa,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const AppHeader = () => {
  return (
    <div className={styles.mainWrapper}>
      <NavLink
        exact
        to="/"
        className={styles.logoWrapper}
        // activeStyle={styles.active}
        activeClassName="active"
      >
        <FontAwesomeIcon icon={faHamsa} />
        <span className={styles.logoText}>Resplash</span>
      </NavLink>
      <div className={styles.navigation}>
        <NavLink
          to="/search"
          className={styles.navigationButton}
          // activeStyle={styles.active}
          activeClassName="active"
        >
          <FontAwesomeIcon color="white" icon={faSearch} />
          <span>Поиск</span>
        </NavLink>
        <NavLink
          to="/favorites"
          className={styles.navigationButton}
          // activeStyle={styles.active}
          activeClassName="active"
        >
          <FontAwesomeIcon color="white" icon={faHeart} />
          <span>Избранное</span>
        </NavLink>
        <NavLink
          to="/history"
          className={styles.navigationButton}
          // activeStyle={styles.active}
          activeClassName="active"
        >
          <FontAwesomeIcon color="white" icon={faHistory} />
          <span>История поиска</span>
        </NavLink>
      </div>
    </div>
  );
};

export default AppHeader;
