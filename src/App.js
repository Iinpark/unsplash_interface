import React from "react";
import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import CardList from "./components/CardList/CardList";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <CardList />
    </div>
  );
}

export default App;
