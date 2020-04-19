import { UNAPI } from "./../BLL/index";

const types = {
  FETCH_PHOTOS: "FETCH_PHOTOS",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_FAILURE: "FETCH_FAILURE",
  FETCH_PENDING: "FETCH_PENDING",

  SET_CURRENT_PHOTO: "SET_CURRENT_PHOTO",
  SET_CURRENT_PHOTO_SUCCESS: "SET_CURRENT_PHOTO_SUCCESS",
};

export const photoActions = {
  fetchSuccess: (photos) => {
    return { type: types.FETCH_SUCCESS, photos: photos };
  },
  setCurrentPhotoSuccsess: (photo) => {
    return { type: types.SET_CURRENT_PHOTO_SUCCESS, currentPhoto: photo };
  },

  fetchAllPhotos: () => {
    return (dispatch) => {
      UNAPI.photos()
        .then((resp) => {
          console.log("photoActions", resp);
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
        console.log("SET CURRENT PHOTO", json);
        dispatch(photoActions.setCurrentPhotoSuccsess(json));
      });
    };
  },
};

const initialState = {
  //list of all photos on HomeScreen | array
  allPhotos: undefined,
  //a photo that user currently viewing on PhotosScreen | object
  currentPhoto: undefined,
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
    default:
      return state;
  }
};
