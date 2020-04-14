import { UNAPI } from "./../BLL/index";

const types = {
  FETCH_PHOTOS: "FETCH_PHOTOS",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_FAILURE: "FETCH_FAILURE",
  FETCH_PENDING: "FETCH_PENDING",
};

export const fetchPhotoActions = {
  fetchSuccess: (photos) => {
    console.log("FETCH SUCCESS", photos);

    return { type: types.FETCH_SUCCESS, photos: photos };
  },

  fetchAllPhotos: () => {
    return (dispatch) => {
      UNAPI.photos()
        .then((resp) => {
          console.log("fetchPhotoActions", resp);
          dispatch(fetchPhotoActions.fetchSuccess(resp));
        })
        .catch((error) => {
          alert(error);
        });
    };
  },
};

const initialState = {
  allPhotos: undefined,
};
export const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SUCCESS:
      return {
        ...state,
        allPhotos: action.photos,
      };
    default:
      return state;
  }
};
