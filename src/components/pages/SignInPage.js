import React, { Component } from "react";
import SigninForm from "./../forms/SignInForm";

class SignInPage extends Component {
  render() {
    const { onSigninFormSubmit } = this.props;

    return (
      <div>
        <SigninForm onSigninFormSubmit={onSigninFormSubmit} />
      </div>
    );
  }
}

export default SignInPage;
