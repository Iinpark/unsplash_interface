import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import { Store } from "./redux/store";
import RootRouter from "./navigation/RootRouter";

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <div className="App">
          <div className="header">
            <AppHeader />
          </div>

          <div className="content">
            <RootRouter />
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
