import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { searchReducer } from "./searchReducer";

export let Store = createStore(searchReducer, applyMiddleware(thunk));
