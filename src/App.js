import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from './pages/checkout/checkout.component';
import ShopPage from "./pages/shop/shop.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from './redux/user/user.selector';


class App extends React.Component {
  unsubscribeFromAuth = null;

componentDidMount() {
const {setCurrentUser} = this.props;

  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        }
        , () => console.log(this.state)
        )
      })
    } else {
      setCurrentUser(userAuth) // clear state if userAuth is null
    }
  })
}

componentWillUnmount() {
  this.unsubscribeFromAuth();
}

  render() {
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
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={()=> this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
        </Switch>
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
