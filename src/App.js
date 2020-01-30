import React, { Component } from "react";
import { useHistory } from "react-router-dom";
//import ImageAnnotation from "./components/ImageAnnotation";
//import ImageManagement from "./components/images_uploading/ImageManagement";
import { setAuthToken, setUserInfo } from "./actions";
import LocalApi from "./apis/LocalApi";
//import RegisterPage from "./components/pages/RegisterPage";
//import SigninForm from "./components/forms/SignInForm";
//import PrivateRoute from "./components/PrivateRoute";
import { connect } from "react-redux";
import UserNotLoggedIn from "./components/authentication/UserNotLoggedIn";
import UserIsAdmin from "./components/authentication/UserIsAdmin";
import RegularUser from "./components/authentication/RegularUser";

/*
function Logout(props) {
  console.log(props);
  props.setAuthToken();
  props.setUserInfo();
  useHistory().push("/");
  sessionStorage.removeItem("token");
  return <p>logged out.</p>;
}
*/

class App extends Component {
  render() {
    const { user, token } = this.props;
    if (!user && token !== null) {
      LocalApi.get("/users/me") //Bug here: need to fix in the future
        .then(r => this.props.setUserInfo(r.data))
        .catch(e => console.log(e));
    }

    if (!user) {
      return (
        <UserNotLoggedIn />
     );
    }
    if (user.is_admin === true) {
      return (
        <UserIsAdmin />
      )
    }
    if (!user.is_admin) {
      return (
        <RegularUser />
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
