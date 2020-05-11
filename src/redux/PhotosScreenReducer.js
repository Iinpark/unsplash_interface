import { UNAPI } from "./../BLL/index";

const types = {
  SET_CURRENT_PHOTO: "SET_CURRENT_PHOTO",
  SET_CURRENT_PHOTO_SUCCESS: "SET_CURRENT_PHOTO_SUCCESS",
  SET_CURRENT_PHOTO_PENDING: "SET_CURRENT_PHOTO_PENDING",

  GET_RELATED_PHOTOS: "GET_RELATED_PHOTOS",
  GET_RELATED_PHOTOS_PENDING: "GET_RELATED_PHOTOS_PENDING",
  GET_RELATED_PHOTOS_SUCCESS: "GET_RELATED_PHOTOS_SUCCESS",
};

export const PhotosScreenActions = {
  setCurrentPhoto: (id) => {
    return (dispatch) => {
      dispatch(PhotosScreenActions.setCurrentPhotoPending());
      UNAPI.getPhoto(id).then((json) => {
        dispatch(
          PhotosScreenActions.setCurrentPhotoSuccess(json),
          dispatch(PhotosScreenActions.getRelatedPhotos(json.alt_description))
        );
      });
    };
  },
  setCurrentPhotoPending: () => {
    return {
      type: types.SET_CURRENT_PHOTO_PENDING,
    };
  },
  setCurrentPhotoSuccess: (photo) => {
    return {
      type: types.SET_CURRENT_PHOTO_SUCCESS,
      currentPhoto: photo,
    };
  },

  getRelatedPhotos: (keyword) => {
    return (dispatch) => {
      dispatch(PhotosScreenActions.getRelatedPhotosPending());
      UNAPI.searchPhotos(keyword).then((response) => {
        dispatch(PhotosScreenActions.getRelatedPhotosSuccess(response.results));
      });
    };
  },
  getRelatedPhotosSuccess: (photos) => {
    return {
      type: types.GET_RELATED_PHOTOS_SUCCESS,
      relatedPhotos: photos,
    };
  },
  getRelatedPhotosPending: () => {
    return { type: types.GET_RELATED_PHOTOS_PENDING };
  },
};

const initialState = {
  //a photo that user currently viewing on PhotosScreen | object
  currentPhoto: undefined,
  relatedPhotos: undefined,
  isRelatedPhotosPending: true,
  isCurrentPhotoPending: true,
};

export const PhotosScreenReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_PHOTO_SUCCESS:
      return {
        ...state,
        currentPhoto: action.currentPhoto,
        isCurrentPhotoPending: false,
      };

    case types.GET_RELATED_PHOTOS_SUCCESS:
      return {
        ...state,
        relatedPhotos: action.relatedPhotos,
        isRelatedPhotosPending: false,
      };
    case types.SET_CURRENT_PHOTO_PENDING:
      return { ...state, isCurrentPhotoPending: true };
    default:
      return {...state};
  }
};
