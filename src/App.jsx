import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage";
import Cards from "./Cards";
import Other from "./Other";
import Navigation from "./Navigation";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Homepage} exact />
            <Route path="/cards" component={Cards} exact />
            <Route path="/other" component={Other} exact />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
