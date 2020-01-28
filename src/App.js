import React, { Component } from "react";
import ImageAnnotation from "./components/ImageAnnotation";
import ImageManagement from "./components/images_uploading/ImageManagement";
import NavBar from "./components/shared/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/shared/Footer";
import LandingPage from "./components/pages/LandingPage"; 
import { BrowserRouter, Route } from "react-router-dom";
import RegisterForm from "./components/forms/RegisterForm";
import SigninForm from "./components/forms/SignInForm";
import CreateProjects from "./components/pages/CreateProjects";

class App extends Component {
  render() {
      return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" component={NavBar} />
                    <Route exact path="/" component={LandingPage} /> 
                    <Route exact path="/register" component={RegisterForm} />
                    <Route exact path="/signin" component={SigninForm} />
                    <Route exact path="/images" component={ImageManagement} />
                    <Route exact path="/annoate" component={ImageAnnotation} />
                    <Route exact path="/createprojects" component={CreateProjects} />
                    <Route path="/" component={Footer} /> 
                </div>
            </BrowserRouter>
        </div>

    );
  }
}

export default App;
