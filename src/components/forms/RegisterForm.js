import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { setAuthToken } from "./../../actions";
import LocalApi from "./../../apis/LocalApi";

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
    console.log(this.props);

    LocalApi.post("users", { username, email, password })
      .then(response => {
        setAuthToken(response.data.token);
        history.push("/signin");
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
      <Container style={{ width: "40%" }}>
        <h1 className="text-center pb-4">Register New Account</h1>
        <Form onClick={this.handleClick} onSubmit={this.onFormSubmit}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label style={{ fontSize: "1.5em" }}>Username:</Form.Label>
            <Form.Control
              className="username"
              type="text"
              value={username}
              autoComplete="current-username"
              placeholder="Enter Username"
              required="required"
              onChange={e => this.onInputChange("username", e)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ fontSize: "1.5em" }}>Email:</Form.Label>
            <Form.Control
              className="email"
              type="email"
              value={email}
              autoComplete="current-email"
              placeholder="Enter Email"
              required="required"
              onChange={e => this.onInputChange("email", e)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label style={{ fontSize: "1.5em" }}>Password:</Form.Label>
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
          <Button variant="danger" type="submit">
            Register
          </Button>
        </Form>

        <h3 className="pt-4">Already have an account?</h3>
        <Link to="/signin">
          <Button variant="success">Sign In</Button>
        </Link>
      </Container>
    );
  }
}

export default connect(null, { setAuthToken })(RegisterForm);
