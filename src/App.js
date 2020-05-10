import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter } from "react-router-dom";
import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
// import { Store } from "./redux/store";
import Store from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import RootRouter from "./navigation/RootRouter";

const { store, persistor } = Store();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <div className="MainWrapper">
            <div className="header">
              <AppHeader />
            </div>

            <div className="content">
              <RootRouter />
              <footer className="footer">
                <span>
                  Developed by{" "}
                  <a
                    href="https://vk.com/sultanesbolatov"
                    target="blank"
                    className="SultanEsbolatov"
                  >
                    Sultan Esbolatov
                  </a>
                </span>
                <a href="https://youtu.be/A0FZIwabctw" target="blank">
                  ⁕Made on Earth for Humans⁕
                </a>
              </footer>
            </div>
          </div>
        </HashRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
