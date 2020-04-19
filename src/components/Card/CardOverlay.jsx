import {
  faDownload,
  faExpand,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { UNAPI } from "./../../BLL/index";
import "./cardOverlayStyle.css";
import { actions } from "../../redux/favoritesReducer";
import { photoActions } from "./../../redux/photoReducer";

class CardOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: this.props.json.isLiked,
    };
  }

  onViewPhoto() {
    const id = this.props.json.id;
    this.props.viewPhoto(id);
  }

  render() {
    let isLiked = this.props.json?.isLiked;
    const user = this.props.json.user;
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
            style={isLiked ? { color: "red" } : { color: "white" }}
            onClick={() => {
              this.props.toggleFavorite(this.props.json);
            }}
          >
            <FontAwesomeIcon className="information-icon" icon={faHeart} />
          </button>
          <Link
            to="/photo"
            className="information-button"
            onClick={this.onViewPhoto.bind(this)}
          >
            <FontAwesomeIcon className="information-icon" icon={faExpand} />
          </Link>
          <button
            className="information-button"
            onClick={() => {
              UNAPI.download(this.props.json);
            }}
          >
            <FontAwesomeIcon className="information-icon" icon={faDownload} />
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFavorite: (json) => {
      dispatch(actions.toggleFavorite(json));
    },
    viewPhoto: (id) => {
      dispatch(photoActions.setCurrentPhoto(id));
    },
  };
};
const mapState = (state) => {
  return {
    favoritesList: state.favorites.favoritesList,
  };
};

export default connect(mapState, mapDispatchToProps)(CardOverlay);
