const types = {
  TOGGLE_FAVORITE: "TOGGLE_FAVORITE",
  DELETE_FAVORITE: "DELETE_FAVORITE",
};

export const actions = {
  toggleFavorite: (photoJson) => {
    return {
      type: types.TOGGLE_FAVORITE,
      photoJson: photoJson,
    };
  },

  //currently not using
  deleteFavorite: (photoID) => {
    return {
      type: types.DELETE_FAVORITE,
      photoID: photoID,
    };
  },
};

const initialState = {
  favoritesList: [],
  total: 0,
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_FAVORITE: {
      const isExisted = state.favoritesList.some((favoritesListItem) =>
        compareFavoritesItem(favoritesListItem, action)
      );
      const likedPhoto = action.photoJson;
      if (isExisted) {
        delete likedPhoto.isLiked;
        return Object.assign({}, state, {
          favoritesList: state.favoritesList.filter(
            (favoritesListItem) =>
              !compareFavoritesItem(favoritesListItem, action)
          ),
        });
      } else {
        likedPhoto.isLiked = true;
        return Object.assign({}, state, {
          favoritesList: [...state.favoritesList, likedPhoto],
        });
      }
    }
    default:
      return state;
  }
};

const compareFavoritesItem = (favoritesItem, action) => {
  return favoritesItem?.id === action.photoJson.id;
};
