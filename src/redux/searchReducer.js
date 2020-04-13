import { UNAPI } from "./../BLL/index";

const isEmpty = (str) => {
  if (str.trim() === "") return true;

  return false;
};

const types = {
  SEARCH_PENDING: "SEARCH_PENDING",
  SEARCH_SUCCESS: "SEARCH_SUCCESS",
  SEARCH_FAILURE: "SEARCH_FAILURE",
  ADD_SEARCH_KEYWORD: "ADD_SEARCH_KEYWORD",
};

export const searchActions = {
  searchSuccsess: (response) => {
    console.log("SEARCH RESULTS", response);
    return { type: types.SEARCH_SUCCESS, results: response.results };
  },
  searchFailure: () => {
    return { type: types.SEARCH_NO_MATHCES };
  },
  searchPending: () => {
    return { type: types.SEARCH_PENDING };
  },
  addSearchKeyword: (keyword) => {
    return { type: types.ADD_SEARCH_KEYWORD, keyword: keyword };
  },
  doSearch: (keyword) => {
    if (isEmpty(keyword)) {
      alert("Пустой поисковый запрос");
    }
    return (dispatch) => {
      dispatch(searchActions.searchPending());
      dispatch(searchActions.addSearchKeyword(keyword));
      UNAPI.searchPhotos(keyword)
        .then((resp) => {
          dispatch(searchActions.searchSuccsess(resp));
        })
        .catch((error) => {
          alert("неудача при поиске");
          dispatch(searchActions.searchFailure());
        });
    };
  },
};

const initialState = {
  search_keywords: [],
  search_results: undefined,
  is_pending: false,
};

export const searchReducer = (state = initialState, action) => {
  const { type, results, keyword } = action;

  switch (type) {
    case types.SEARCH_PENDING:
      return {
        ...state,
        is_pending: true,
      };
    case types.SEARCH_SUCCESS:
      return {
        ...state,
        search_results: results,
        isPending: false,
      };
    case types.SEARCH_FAILURE:
      return {
        ...state,
        search_results: "no matches",
      };

    case types.ADD_SEARCH_KEYWORD:
      let copyKeywords = [...state.search_keywords];
      copyKeywords.push(keyword);
      return {
        ...state,
        search_keywords: copyKeywords,
      };

    default:
      return {
        ...state,
      };
  }
};
