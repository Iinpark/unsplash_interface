import React from "react";
import CardOverlay from "./CardOverlay";
import "./cardStyle.css";

const Card = ({ src, altDesc, json }) => {
  return (
    <figure>
      <div className="card">
        <img src={src} alt={altDesc} className="image" />
        <div className="information-overlay">
          <CardOverlay json={json} />
        </div>
      </div>
    </figure>
  );
};
export default Card;
