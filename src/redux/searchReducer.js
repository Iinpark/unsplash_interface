import { UNAPI } from "./../BLL/index";

const types = {
  SEARCH_PENDING: "SEARCH_PENDING",
  SEARCH_SUCCESS: "SEARCH_SUCCESS",
  SEARCH_FAILURE: "SEARCH_FAILURE"
};

export const searchActions = {
  searchSuccsess: response => {
    console.log("SEARCH RESULTS", response);
    return { type: types.SEARCH_SUCCESS, results: response.results };
  },
  searchFailure: () => {
    return { type: types.SEARCH_NO_MATHCES };
  },
  searchPending: () => {
    return { type: types.SEARCH_PENDING };
  },
  doSearch: keyword => {
    return dispatch => {
      dispatch(searchActions.searchPending());
      UNAPI.searchPhotos(keyword)
        .then(resp => {
          dispatch(searchActions.searchSuccsess(resp));
        })
        .catch(error => {
          alert("неудача при поиске");
          dispatch(searchActions.searchFailure());
        });
    };
  }
};

const initialState = {
  search_results: undefined,
  is_pending: false
};

export const searchReducer = (state = initialState, action) => {
  const { type, results } = action;

  switch (type) {
    case types.SEARCH_PENDING:
      return {
        ...state,
        is_pending: true
      };

    case types.SEARCH_SUCCESS:
      return {
        ...state,
        search_results: results,
        isPending: false
      };

    case types.SEARCH_FAILURE:
      return {
        ...state,
        search_results: "no matches"
      };

    default:
      return {
        ...state
      };
  }
};
