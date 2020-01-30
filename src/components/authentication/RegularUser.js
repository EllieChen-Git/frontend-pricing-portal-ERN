import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link, useHistory } from "react-router-dom";
import ImageAnnotation from "../ImageAnnotation"
import { connect } from "react-redux";
import { setAuthToken, setUserInfo } from "../../actions/index";

function Logout(props) {
    console.log(props);
    props.setAuthToken();
    props.setUserInfo();
    useHistory().push("/");
    sessionStorage.removeItem("token");
    return <p>logged out.</p>;
  }

  const mapStateToProps = (state) => {
    return {
      token: state.auth.token,
      user: state.auth.user
    }
  }

class RegularUser extends Component {
    render() {
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
        )
    };
};

export default connect(mapStateToProps, {setAuthToken, setUserInfo})(RegularUser);
