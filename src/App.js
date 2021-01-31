import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import ShopPage from "./pages/shop/shop.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

componentDidMount() {
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    this.setState({ currentUser: user }
      , () => console.log(user)
      )
  })
}

componentWillUnmount() {
  this.unsubscribeFromAuth();
}

  render() {
    return (
      <Fragment>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/hats" component={HomePage} />
          <Route exact path="/jackets" component={HomePage} />
          <Route exact path="/sneakers" component={HomePage} />
          <Route exact path="/womens" component={HomePage} />
          <Route exact path="/mens" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
