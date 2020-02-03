import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthToken, setUserInfo } from "./actions";
import LocalApi from "./apis/LocalApi";
import UserDashboard from "./components/authentication/UserDashboard";
import AdminDashboard from "./components/authentication/AdminDashboard";
import NotLoggedIn from "./components/authentication/NotLoggedIn";
import Footer from "./components/shared/Footer";

class App extends Component {
  render() {
    const { user, token } = this.props;

    // General setup to set user info
    if (!user && token !== null) {
      LocalApi.get("/users/me")
        .then(r => this.props.setUserInfo(r.data))
        .catch(e => console.log(e));
    }

    //If users are not logged in
    if (!user) {
      return (
        <>
          <NotLoggedIn {...this.props} />
          <Footer />
        </>
      );
    } else if (user.is_admin) {
      //Users logged in as admin
      return (
        <>
          <AdminDashboard {...this.props} />
          <Footer />
        </>
      );
    } else if (!user.is_admin) {
      //Users logged in as regular users
      return (
        <>
          <UserDashboard {...this.props} />
          <Footer />
        </>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    user: state.auth.user
  };
};

export default connect(mapStateToProps, { setAuthToken, setUserInfo })(App);
