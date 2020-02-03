import React, { Component } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import ImageManagement from "./../images/ImageManagement";
import EditImage from "./../images/EditImage";
import UserList from "./UserList";
import Navbar from "./../shared/NavBar";
import ReviewList from "./../annotations/ReviewList";

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
            <ImageManagement />
          </Route>
          <Route path="/edit/:id" component={EditImage} />
          <Route path="/logout">
            <Logout {...this.props} />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
        </Switch>
        <Route exact path="/annotations">
          <ReviewList />
        </Route>
      </BrowserRouter>
    );
  }
}

export default UserIsAdmin;
