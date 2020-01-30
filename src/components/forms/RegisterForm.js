import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthToken } from "./../../actions";
import LocalApi from "../../apis/LocalApi";
import { useHistory } from "react-router-dom";
//access to the history object via useHistory

//we create a class that extends our Component.
class RegisterForm extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: null
  };

  onFormSubmit = event => {
    event.preventDefault();
    const { history, setAuthToken } = this.props;
    const { username, email, password } = this.state;

    LocalApi.post("users", { username, email, password })
      .then(response => {
        setAuthToken(response.data.token)
  //      useHistory().push("/");
        history.push("/");
      })
      .catch(error => {
        console.log(error);
        this.setState({ error });
      });
  };

  onInputChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { username, email, password } = this.state;

    return (
      <div>
        <form onClick={this.handleClick} onSubmit={this.onFormSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            value={username}
            autoComplete="username"
            onChange={e => this.onInputChange("username", e)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            autoComplete="email"
            onChange={e => this.onInputChange("email", e)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            value={password}
            autoComplete="current-password"
            onChange={e => this.onInputChange("password", e)}
          />
          <input type="submit" value="Register" />
        </form>
        <h2>All ready have an account with Skychute?</h2>
        {/* <a href="/signin">Sign In</a> */}
      </div>
    );
  }
}

export default connect(null, { setAuthToken })(RegisterForm);