import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link,  } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import SigninForm from "../forms/SignInForm";

class UserNotLoggedIn extends Component {
        render() {
            return (
              <BrowserRouter>
              <Link to="/">Sign In</Link> | <Link to="/register">Register</Link>
              <Switch>
                <Route exact path="/">
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
            </BrowserRouter>);
    };
};


export default UserNotLoggedIn