import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { searchReducer } from "./searchReducer";
import { favoritesReducer } from './favoritesReducer';

const rootReducer = combineReducers({
  search: searchReducer,
  favorites: favoritesReducer
});

export let Store = createStore(rootReducer, applyMiddleware(thunk));
