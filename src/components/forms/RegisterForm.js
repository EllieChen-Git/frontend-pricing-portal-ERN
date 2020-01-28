import React, { Component } from 'react';

class RegisterForm extends Component {
    render() {
        return (
            <div>
                <form>
                Username:
                <input type="text" />
                Email:
                <input type="email" />
                Password:
                <input type="password" />
                </form>
                <input type="submit" value="Register"/>
                <h2>All ready have an account with Skychute?</h2>
                <a href="/signin">Sign In</a>
            </div>
            );
  }
}

export default RegisterForm; 