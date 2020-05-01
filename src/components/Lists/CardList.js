import React from "react";
import { connect } from "react-redux";
import Masonry from "react-masonry-component";
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
    const { setLastCardRef } = this.props;
    return (
      <Masonry
     //   className={"CardList"} // default ''
        elementType={"ul"} // default 'div'
        //options={masonryOptions} // default {}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        //  imagesLoadedOptions={imagesLoadedOptions} // default {}
      >
        {this.props.data
          ? this.props.data.map((item, index) => {
              if (index === this.props.data.length - 1) {
                return (
                  <Card
                    setRef={setLastCardRef}
                    src={item.urls.small}
                    altDesc={item.alt_description}
                    json={item}
                    key={item.id}
                  />
                );
              } else {
                return (
                  <Card
                    src={item.urls.small}
                    altDesc={item.alt_description}
                    json={item}
                    key={item.id}
                  />
                );
              }
            })
          : null}
      </Masonry>
    );
  }
}

const mapState = (state) => {
  return {
    favoritesList: state.favorites.favoritesList,
  };
};
export default connect(mapState)(CardList);
