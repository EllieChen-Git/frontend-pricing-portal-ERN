import React, { Component } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import AnnotationPage from "./../annotations/AnnotationPage";
import AnnotationList from "./../annotations/AnnotationList";
import { connect } from "react-redux";
import { setAuthToken, setUserInfo } from "./../../actions";
import Navbar from "./../shared/NavBar";
import LandingPage from "./../pages/LandingPage";

function Logout(props) {
  props.setAuthToken();
  props.setUserInfo();
  useHistory().push("/");
  sessionStorage.removeItem("token");
  return <p>logged out.</p>;
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    user: state.auth.user
  };
};

class RegularUser extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar {...this.props} />
        <Switch>
          <Route exact path="/signin">
            <AnnotationList />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/annotations">
            <AnnotationList {...this.props} />
          </Route>
          <Route exact path="/annotations/:id" children={<AnnotationPage />} />
          <Route exact path="/logout">
            <Logout {...this.props} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(mapStateToProps, { setAuthToken, setUserInfo })(
  RegularUser
);
