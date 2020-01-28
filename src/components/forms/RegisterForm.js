import React, { Component } from 'react';

class RegisterForm extends Component {
    render() {
        return (
            <div>
                <form>
                First Name:
                <input name="name" type="text" />
                Last Name:
                <input name="name" type="text" />
                Company: 
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