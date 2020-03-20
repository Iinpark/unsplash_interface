import React from "react";
import "./cardStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faExpand,
  faDownload
} from "@fortawesome/free-solid-svg-icons";

const pressed = () => {
  alert("pressed");
};

const Card = ({ src, altDesc }) => {
  return (
    <div className="card">
      <img src={src} alt={altDesc} className="image" />
      <div className="information-overlay">
        <div className="informarion-buttons">
          <button className="information-button" onClick={pressed}>
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button className="information-button">
            <FontAwesomeIcon icon={faExpand} />
          </button>
          <button className="information-button">
            <FontAwesomeIcon icon={faDownload} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
