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
      return isExisted
        ? Object.assign({}, state, {
            favoritesList: state.favoritesList.filter(
              (favoritesListItem) =>
                !compareFavoritesItem(favoritesListItem, action)
            ),
            total: state.total - 1,
          })
        : Object.assign({}, state, {
            favoritesList: [...state.favoritesList, action.photoJson],
            total: state.total + 1,
          });
    }
    default:
      return state;
  }
};

const compareFavoritesItem = (favoritesItem, action) => {
  return favoritesItem?.id === action.photoJson.id;
};
