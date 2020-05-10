import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Preloader from "../components/Preloader/Preloader";
import HomeScreen from "./../HomeScreen/HomeScreen";
// import SearchResultsScreen from "../SearchScreen/SearchResultsScreen";
// import SearchHistoryScreen from "../SearchHistoryScreen/SearchHistoryScreen";
// import FavoritesScreen from "./../FavoritesScreen/FavoritesScreen";
// import PhotosScreen from "../PhotosScreen/PhotosScreen";

// const HomeScreen = lazy(() => {
//   return import("./../HomeScreen/HomeScreen");
// });

const SearchResultsScreen = lazy(() =>
  import("../SearchScreen/SearchResultsScreen")
);
const SearchHistoryScreen = lazy(() => {
  return import("../SearchHistoryScreen/SearchHistoryScreen");
});
const FavoritesScreen = lazy(() => {
  return import("./../FavoritesScreen/FavoritesScreen");
});
const PhotosScreen = lazy(() => {
  return import("../PhotosScreen/PhotosScreen");
});

const RootRouter = () => {
  return (
    <Switch>
      <Suspense fallback={<Preloader />}>
        <Route path="/search" component={SearchResultsScreen} />
        <Route path="/history" component={SearchHistoryScreen} />
        <Route path="/favorites" component={FavoritesScreen} />
        <Route exact path="/" component={HomeScreen} />
        <Route path="/photo" component={PhotosScreen} />
      </Suspense>
    </Switch>
  );
};

export default RootRouter;
