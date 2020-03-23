import React from "react";
import "./cardStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faExpand,
  faDownload
} from "@fortawesome/free-solid-svg-icons";
import { UNAPI } from "./../../BLL/index";

const pressed = () => {
  alert("pressed");
};

const Card = ({ src, altDesc, json }) => {
  return (
    <div className="card">
      <img src={src} alt={altDesc} className="image" />
      <div className="information-overlay">
        <div className="informarion-buttons">
          <button className="information-button" onClick={pressed}>
            <FontAwesomeIcon className="information-icon" icon={faHeart} />
          </button>
          <button className="information-button">
            <FontAwesomeIcon className="information-icon" icon={faExpand} />
          </button>
          <button
            className="information-button"
            onClick={() => {
              UNAPI.download(json);
            }}
          >
            <FontAwesomeIcon className="information-icon" icon={faDownload} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
