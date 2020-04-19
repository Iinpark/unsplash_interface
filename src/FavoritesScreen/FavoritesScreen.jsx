import React from "react";
import { connect } from "react-redux";
import CardList from "./../components/Lists/CardList";

const FavoritesScreen = ({ favoritesList }) => {
  return <CardList data={favoritesList} />;
};

const mapState = (state) => {
  return { favoritesList: state.favorites.favoritesList };
};

export default connect(mapState)(FavoritesScreen);
