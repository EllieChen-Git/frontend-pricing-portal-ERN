import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ImageAnnotation from "./components/ImageAnnotation";
import ImageManagement from "./components/images_uploading/ImageManagement";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/annotate">Annotate</Link>
            </li>
            <li>
              <Link to="/images">Manage Images</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/">
              <h1>Welcome</h1>
            </Route>
            <Route path="/annotate">
              <ImageAnnotation />
            </Route>
            <Route path="/images">
              <ImageManagement />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
