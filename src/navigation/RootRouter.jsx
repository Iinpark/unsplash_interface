import React from "react";
import { Route, Switch } from "react-router-dom";
import SearchResultsScreen from "./../components/SearchScreen/SearchResultsScreen";
import HomeScreen from "./../HomeScreen/HomeScreen";

export default class RootRouter extends React.PureComponent{
  render() {
    return (
      <Switch>
        <Route path="/search">
          <SearchResultsScreen />
        </Route>
        <Route path="/">
          <HomeScreen />
        </Route>
      </Switch>
    );
  }
}
