import React from "react";
import { connect } from "react-redux";
import CardList from "./../components/Lists/CardList";
import Placeholder from "../components/Placeholder/Placeholder";

const FavoritesScreen = ({ favoritesList }) => {
  return favoritesList.length === 0 ? (
    <Placeholder />
  ) : (
    <CardList data={favoritesList} />
  );
};

const mapState = (state) => {
  return { favoritesList: state.favorites.favoritesList };
};

export default connect(mapState)(FavoritesScreen);
