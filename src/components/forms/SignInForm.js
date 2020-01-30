import React, { Component } from "react";
import LocalApi from "../../apis/LocalApi";
import { connect } from "react-redux";
import { setAuthToken } from "../../actions";
import { Form, Button, Container } from "react-bootstrap";

class SigninForm extends Component {
  state = {
    username: "",
    password: ""
  };

  onFormSubmit = async event => {
    event.preventDefault();
    const { username, password } = this.state;

    try {
      const response = await LocalApi.post("/users/login", {
        username,
        password
      });
      this.props.setAuthToken(response.data.token);
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
      <Container>
        <h1>Sign In</h1>
        <Form onClick={this.handleClick} onSubmit={this.onFormSubmit}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control
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

        <Button variant="danger" href="/register">
          Register
        </Button>
      </Container>
    );
  }
}

export default connect(null, { setAuthToken })(SigninForm);
