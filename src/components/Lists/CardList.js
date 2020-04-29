import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card.jsx";
import "./cardListStyle.css";

class CardList extends React.Component {
  // How favorites works in this app?
  // When user presses on a Like button, favoritesReducer adds "isLike" boolean field into photo`s object,
  // and copying that object into "favorites" array.
  // Also we have redux-persist library, that saves apps State into localStorage.
  // But, when user reloads the page, app fetches new photos from server.
  // And that photos objects do not contain "isLike" field
  // This methot compares photos from server and favoritesList, and if this photo contains in favoritesList
  // mutates object from server by adding "isLike" field
  compareWithFavorites() {
    const favList = this.props.favoritesList; //array
    const data = this.props?.data;

    if (data) {
      for (let favorite of favList) {
        let i = 0;
        for (let item of data) {
          if (favorite.id === item.id) {
            item.isLiked = true;
          }
        }
        i = i + 1;
      }
    }
  }
  render() {
    this.compareWithFavorites();
    return (
      <div className="CardList">
        {this.props.data
          ? this.props.data.map((item) => (
              <Card
                src={item.urls.small}
                altDesc={item.alt_description}
                json={item}
              />
            ))
          : null}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    favoritesList: state.favorites.favoritesList,
  };
};
export default connect(mapState)(CardList);
