import { UNAPI } from "./../BLL/index";

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
};

export const photoActions = {
  fetchSuccess: (photos) => {
    return { type: types.FETCH_SUCCESS, photos: photos };
  },
  setCurrentPhotoSuccess: (photo) => {
    return { type: types.SET_CURRENT_PHOTO_SUCCESS, currentPhoto: photo };
  },

  fetchAllPhotos: () => {
    return (dispatch) => {
      UNAPI.photos()
        .then((resp) => {
          dispatch(photoActions.fetchSuccess(resp));
        })
        .catch((error) => {
          alert(error);
        });
    };
  },
  setCurrentPhoto: (id) => {
    return (dispatch) => {
      UNAPI.getPhoto(id).then((json) => {
        dispatch(
          photoActions.setCurrentPhotoSuccess(json),
          dispatch(photoActions.getRelatedPhotos(json.alt_description))
        );
      });
    };
  },

  getRelatedPhotos: (keyword) => {
    return (dispatch) => {
      dispatch(photoActions.getRelatedPhotosPending());
      UNAPI.searchPhotos(keyword).then((response) => {
        dispatch(photoActions.getRelatedPhotosSuccess(response.results));
      });
    };
  },
  getRelatedPhotosSuccess: (photos) => {
    return { type: types.GET_RELATED_PHOTOS_SUCCESS, relatedPhotos: photos };
  },
  getRelatedPhotosPending: () => {
    return { type: types.GET_RELATED_PHOTOS_PENDING };
  },
};

const initialState = {
  //list of all photos on HomeScreen | array
  allPhotos: undefined,
  //a photo that user currently viewing on PhotosScreen | object
  currentPhoto: undefined,
  relatedPhotos: undefined,
  isRelatedPhotosPending: true,
};
export const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SUCCESS:
      return {
        ...state,
        allPhotos: action.photos,
      };

    case types.SET_CURRENT_PHOTO_SUCCESS:
      return {
        ...state,
        currentPhoto: action.currentPhoto,
      };

    case types.GET_RELATED_PHOTOS_SUCCESS:
      return {
        ...state,
        relatedPhotos: action.relatedPhotos,
        isRelatedPhotosPending: false,
      };
    default:
      return state;
  }
};
