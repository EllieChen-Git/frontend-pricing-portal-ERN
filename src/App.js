import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageAnnotation from "./components/ImageAnnotation";
import ImageManagement from "./components/images_uploading/ImageManagement";
import NavBar from "./components/shared/NavBar";
import Footer from "./components/shared/Footer";
import LandingPage from "./components/pages/LandingPage";

import RegisterPage from "./components/pages/RegisterPage";
import SigninForm from "./components/forms/SignInForm";
import CreateProjects from "./components/pages/CreateProjects";

import PrivateRoute from "./components/PrivateRoute";
import { connect } from "react-redux";
import { setAuthToken } from "./actions";

class App extends Component {
  render() {
    const { token } = this.props;
    console.log(this.props);

    return (
      <div>
        <BrowserRouter>
          <div>
            {token && <h4>User Logged In!</h4>}
            <Route path="/" component={NavBar} />
            <Route exact path="/" component={LandingPage} />
            <Route
              exact
              path="/register"
              render={props => {
                return <RegisterPage {...props} />;
              }}
            />
            <PrivateRoute exact path="/images" component={ImageManagement} />
            <Route
              exact
              path="/signin"
              render={props => {
                return <SigninForm {...props} />;
              }}
            />
            <Route exact path="/annoate" component={ImageAnnotation} />
            <Route exact path="/createprojects" component={CreateProjects} />
            <Route path="/" component={Footer} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, { setAuthToken })(App);
