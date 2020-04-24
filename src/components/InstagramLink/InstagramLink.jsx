import React from "react";
import { isMobile } from "react-device-detect";
import { ReactComponent as InstagramLogo } from "./../../images/instagram.svg";
import styles from "./Instagram.module.css";

const InstagramLink = ({ instagram_username }) => {
  const size = "1.3em";
  if (isMobile) {
    return (
      <a href={`instagram://user?username=${instagram_username}`}>
        <InstagramLogo height={size} width={size} className={styles.svg} /> @
        {instagram_username}
      </a>
    );
  } else {
    return (
      <a href={`https://instagram.com/${instagram_username}`} target="blank">
        <InstagramLogo
          height={size}
          width={size}
          className={styles.InstagramLogo}
        />{" "}
        @{instagram_username}
      </a>
    );
  }
};
export default InstagramLink;
