import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { setAuthToken } from "./../../actions";
import LocalApi from "./../../apis/LocalApi";

class SigninForm extends Component {
  state = {
    username: "",
    password: "",
    error: null
  };

  onFormSubmit = async event => {
    event.preventDefault();
    const { setAuthToken } = this.props;
    const { username, password } = this.state;

    try {
      const response = await LocalApi.post("/users/login", {
        username,
        password
      });
      setAuthToken(response.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  onInputChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <Container>
        <h1>Sign In</h1>
        <Form onClick={this.handleClick} onSubmit={this.onFormSubmit}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              className="username"
              type="text"
              value={username}
              placeholder="Enter Username"
              autoComplete="current-username"
              required="required"
              onChange={e => this.onInputChange("username", e)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              className="password"
              type="password"
              placeholder="Enter Password"
              autoComplete="current-password"
              value={password}
              required="required"
              onChange={e => this.onInputChange("password", e)}
            />
          </Form.Group>

          <Button variant="success" type="submit">
            Sign In
          </Button>
        </Form>
        <h3>Don't Have An Account?</h3>

        <Link to="/register">
          <Button variant="danger"> Register</Button>
        </Link>
      </Container>
    );
  }
}

export default connect(null, { setAuthToken })(SigninForm);
