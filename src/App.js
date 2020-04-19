import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter } from "react-router-dom";
import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import { Store } from "./redux/store";
import RootRouter from "./navigation/RootRouter";

function App() {
  return (
    <Provider store={Store}>
      <HashRouter >
        <div className="header">
          <AppHeader />
        </div>

        <div className="content">
          <RootRouter />
          <div className="manifesto">
            <span>2020</span>
            <a href="https://youtu.be/A0FZIwabctw" title="Узнать что это значит" target='blank'>
              ⁕Made on Earth for Humans⁕
            </a>
          </div>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
