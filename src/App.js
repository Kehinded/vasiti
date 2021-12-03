import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import HeaderSection from "./sections/HeaderSection";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <HeaderSection />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
