import {
  faDownload,
  faExpand,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { connect } from "react-redux";
import { UNAPI } from "./../../BLL/index";
import "./cardOverlayStyle.css";
import { actions } from "../../redux/favoritesReducer";

const CardOverlay = ({ json, toggleFavorite }) => {
  const user = json.user;
  return (
    <div className="card-overlay">
      <div className="profile-info">
        <img
          src={user.profile_image.medium}
          className="profile-photo"
          alt="profile"
        />
        <div className="profile-info-name">
          <span>@{user.instagram_username}</span>
          <span>{user.name}</span>
        </div>
      </div>
      <div className="information-buttons">
        <button
          className="information-button"
          onClick={() => {
            toggleFavorite(json);
          }}
        >
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
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFavorite: (json) => {
      dispatch(actions.toggleFavorite(json));
    },
  };
};

export default connect(null, mapDispatchToProps)(CardOverlay);
