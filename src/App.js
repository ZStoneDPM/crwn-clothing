import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HomePage} />
        <Route exact path="/jackets" component={HomePage} />
        <Route exact path="/sneakers" component={HomePage} />
        <Route exact path="/womens" component={HomePage} />
        <Route exact path="/mens" component={HomePage} />
      </Switch>
    </Fragment>
  );
}

export default App;
