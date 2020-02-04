import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RegisterPage from "./../pages/RegisterPage";
import SigninForm from "./../forms/SignInForm";
import Navbar from "./../shared/NavBar";
import LandingPage from "./../pages/LandingPage";

class UserNotLoggedIn extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar {...this.props} />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/signin">
            <SigninForm />
          </Route>
          <Route
            exact
            path="/register"
            render={props => {
              return <RegisterPage {...props} />;
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default UserNotLoggedIn;
