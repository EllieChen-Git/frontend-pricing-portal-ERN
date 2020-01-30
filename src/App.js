import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useHistory
} from "react-router-dom";
import AnnotationPage from "./components/pages/AnnotationPage";
import ImageManagement from "./components/images_uploading/ImageManagement";
import { setAuthToken, setUserInfo } from "./actions";
import LocalApi from "./apis/LocalApi";
import RegisterPage from "./components/pages/RegisterPage";
import SigninForm from "./components/forms/SignInForm";

//import PrivateRoute from "./components/PrivateRoute";
import { connect } from "react-redux";
import AnnotationList from "./components/AnnotationList";

function Logout(props) {
  console.log(props);
  props.setAuthToken();
  props.setUserInfo();
  useHistory().push("/");
  sessionStorage.removeItem("token");
  return <p>logged out.</p>;
}

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
        </BrowserRouter>
      );
    }
    if (user.is_admin === true) {
      return (
        <BrowserRouter>
          <Link to="/">Images</Link> | <Link to="/logout">Logout</Link>
          <Switch>
            <Route exact path="/">
              <ImageManagement />
            </Route>
            <Route path="/logout">
              <Logout {...this.props} />
            </Route>
          </Switch>
        </BrowserRouter>
      );
    }
    if (!user.is_admin) {
      return (
        <BrowserRouter>
          <Link to="/">Annotations</Link> | <Link to="/logout">Logout</Link>
          <Switch>
            <Route exact path="/">
              <AnnotationList />
            </Route>
            <Route path = "/annotations/:id" children={<AnnotationPage />} /> 
            <Route path="/logout">
              <Logout {...this.props} />
            </Route>
          </Switch>
        </BrowserRouter>
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
