import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { searchReducer } from "./searchReducer";
import { favoritesReducer } from "./favoritesReducer";
import { photoReducer } from "./photoReducer";
//redux-persist. for saving state into localStorage
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PhotosScreenReducer } from "./PhotosScreenReducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["photos"],
};

const rootReducer = combineReducers({
  search: searchReducer,
  favorites: favoritesReducer,
  photos: photoReducer,
  photosScreen: PhotosScreenReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  let store = createStore(
    persistedReducer,
    composeEnhancer(applyMiddleware(thunk))
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
