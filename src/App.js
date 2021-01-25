import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Header from './components/header/header.component';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HomePage} />
        <Route exact path="/jackets" component={HomePage} />
        <Route exact path="/sneakers" component={HomePage} />
        <Route exact path="/womens" component={HomePage} />
        <Route exact path="/mens" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </Fragment>
  );
}

export default App;
