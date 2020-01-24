import React, { Component } from 'react';

class SigninForm extends Component {
    render() {
        return (
            <div>
                <h1>Sign In</h1>
                <form>
                Email:
                <input type="email" />
                Password: 
                <input type="password" />
                <h3>Remember Me</h3>
                <input type="submit" value="Sign In"/>
                </form>
                <h3>Forgot Password?</h3>
                <h3>Don't Have An Account?</h3>
                <input type="submit" value="Register"/>
            </div>
            );
  }
}

export default SigninForm; 