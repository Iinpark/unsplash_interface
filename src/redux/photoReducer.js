import { UNAPI } from "./../BLL/index";
let _cp = 1;
const types = {
  FETCH_PHOTOS: "FETCH_PHOTOS",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_FAILURE: "FETCH_FAILURE",
  FETCH_PENDING: "FETCH_PENDING",

  SET_CURRENT_PHOTO: "SET_CURRENT_PHOTO",
  SET_CURRENT_PHOTO_SUCCESS: "SET_CURRENT_PHOTO_SUCCESS",

  GET_RELATED_PHOTOS: "GET_RELATED_PHOTOS",
  GET_RELATED_PHOTOS_PENDING: "GET_RELATED_PHOTOS_PENDING",
  GET_RELATED_PHOTOS_SUCCESS: "GET_RELATED_PHOTOS_SUCCESS",

  COMPARE_FAVORITES: "COMPARE_FAVORITES",
  COMPARE_FAVORITES_SUCCESS: "COMPARE_FAVORITES_SUCCESS",

  INCREASE_PAGE: "INCREASE_PAGE",
};

export const photoActions = {
  fetchSuccess: (photos) => {
    return { type: types.FETCH_SUCCESS, photos: photos };
  },
  fetchAllPhotos: (page = 1) => {
    return (dispatch) => {
      UNAPI.photos(page)
        .then((resp) => {
          dispatch(photoActions.fetchSuccess(resp));
        })
        .catch((error) => {
          alert(error);
        });
    };
  },
  increasePage: () => {
    _cp = _cp + 1;
    return (dispatch) => {
      dispatch(photoActions.fetchAllPhotos(_cp));
    };
  },
};

const initialState = {
  //list of all photos on HomeScreen | array
  allPhotos: undefined,
  currentPage: 1,

};

export const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SUCCESS:
      return {
        ...state,
        allPhotos: [...new Set([...(state.allPhotos || []), ...action.photos])],
      };
    case types.INCREASE_PAGE:
      return {
        ...state,
        currentPage: action?._cp,
      };
    default:
      return state;
  }
};
