import React from "react";
import { Provider } from "react-redux";

import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import CardList from "./components/Lists/CardList";
import SearchHeader from "./components/SearchScreen/SearchHeader";
import { Store } from './redux/store';


function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <div className="header">
          <AppHeader />
        </div>
        <div className="content">
          <SearchHeader />
          <CardList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
