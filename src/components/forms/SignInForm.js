import React, { Component } from "react";
import LocalApi from "../../apis/LocalApi";
import { connect } from "react-redux";
import { setAuthToken } from "../../actions";

class SigninForm extends Component {
  state = {
    username: "",
    password: ""
  };

  onFormSubmit = async event => {
    event.preventDefault();
    const { username, password } = this.state;

    // LocalApi.post("/users/login", { username, password })
    //   .then(response => {
    //     console.log(response);
    //     this.props.setAuthToken(response.data);
    //     this.props.history.push("/");
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     console.log("not working");
    //     this.setState({ error });
    //   });

    try {
      const response = await LocalApi.post("/users/login", {
        username,
        password
      });

      this.props.setAuthToken(response.data.token);
      this.props.history.push("/");
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  onInputChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <h1>Sign In</h1>
        <form onClick={this.handleClick} onSubmit={this.onFormSubmit}>
          <label htmlFor="current-username">Username:</label>
          <input
            type="text"
            onChange={e => this.onInputChange("username", e)}
            id="current-username"
            required="required"
            value={username}
            autoComplete="current-username"
          />
          <label htmlFor="current-password">Password: </label>
          <input
            type="password"
            id="current-password"
            required="required"
            autoComplete="current-password"
            value={password}
            onChange={e => this.onInputChange("password", e)}
          />
          <h3>Remember Me</h3>
          <input type="submit" value="Sign In" />
        </form>
        <h3>Forgot Password?</h3>
        <h3>Don't Have An Account?</h3>
        <a href="/register">Register</a>
      </div>
    );
  }
}

export default connect(null, { setAuthToken })(SigninForm);
