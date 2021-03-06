import React, { Component } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import ImageManagement from "./../images/ImageManagement";
import EditImage from "./../images/EditImage";
import UserList from "./UserList";
import Navbar from "./../shared/NavBar";
import ReviewList from "./../annotations/ReviewList";
import AnnotationPage from "./../annotations/AnnotationPage";
import LandingPage from "./../pages/LandingPage";

function Logout(props) {
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
        <Navbar {...this.props} />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/signin">
            <ImageManagement />
          </Route>

          <Route exact path="/images">
            <ImageManagement />
          </Route>
          <Route path="/edit/:id" component={EditImage} />
          <Route exact path="/users">
            <UserList />
          </Route>
        </Switch>
        <Route exact path="/annotations">
          <ReviewList />
        </Route>
        <Route path="/annotations/:id" children={<AnnotationPage />} />
        <Route path="/logout">
          <Logout {...this.props} />
        </Route>
      </BrowserRouter>
    );
  }
}

export default UserIsAdmin;
