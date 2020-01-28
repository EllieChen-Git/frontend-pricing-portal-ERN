import React, { Component } from 'react';

class SigninForm extends Component {

    handleclick 
    render() {
        return (
            <div>
                <h1>Sign In</h1>
                <form>
                Username:
                <input type="text" />
                Password: 
                <input type="password" />
                <h3>Remember Me</h3>
                <input type="submit" value="Sign In"/>
                </form>
                <h3>Forgot Password?</h3>
                <h3>Don't Have An Account?</h3>
                <a href="/register">Register</a>
                
            </div>
            );
  }
}

export default SigninForm; 