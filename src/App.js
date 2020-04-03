import React from "react";
import { Provider } from "react-redux";

import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import CardList from "./components/Lists/CardList";
import SearchHeader from "./components/SearchScreen/SearchHeader";
import { Store } from "./redux/store";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <div className="App">
          <div className="header">
            <AppHeader />
          </div>

          <div className="content">
            <Switch>
              <Route path="/search">
                <SearchHeader />
              </Route>
              <Route path="/">
                <CardList />
              </Route>
            </Switch>
            <div className="manifesto">
              <span>©2020</span>
              <span>⁕Made on Earth by Humans⁕</span>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
