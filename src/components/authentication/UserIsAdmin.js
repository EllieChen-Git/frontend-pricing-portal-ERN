import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link, useHistory } from "react-router-dom";
import SignInForm from "../forms/SignInForm"
import ImageManagement from "../images_uploading/ImageManagement"

function Logout(props) {
    console.log(props);
    props.setAuthToken();
    props.setUserInfo();
    useHistory().push("/");
    sessionStorage.removeItem("token");
    return <p>logged out.</p>;
  }

class UserIsAdmin extends Component {
        render() {
            return (
                <BrowserRouter>
                <Link to="/">Images</Link> | <Link to="/logout">Logout</Link>
                <Switch>
                  <Route exact path="/"><ImageManagement /></Route>
                  <Route path="/logout">
                    <Logout {...this.props} />
                  </Route>
                </Switch>
              </BrowserRouter>);
    };
};

export default UserIsAdmin
