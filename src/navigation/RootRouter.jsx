import React from "react";
import { Route, Switch } from "react-router-dom";
import SearchResultsScreen from "../SearchScreen/SearchResultsScreen";
import HomeScreen from "./../HomeScreen/HomeScreen";
import SearchHistoryScreen from "../SearchHistoryScreen/SearchHistoryScreen";

export default class RootRouter extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route path="/search">
          <SearchResultsScreen />
        </Route>
        <Route path="/history">
          <SearchHistoryScreen />
        </Route>
        <Route path="/">
          <HomeScreen />
        </Route>
      </Switch>
    );
  }
}
