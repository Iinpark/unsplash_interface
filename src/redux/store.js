import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { searchReducer } from "./searchReducer";
import { favoritesReducer } from "./favoritesReducer";
import { photoReducer } from "./photoReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  favorites: favoritesReducer,
  photos: photoReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export let Store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
