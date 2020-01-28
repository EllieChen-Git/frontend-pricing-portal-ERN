import React, { Component } from 'react';
import axios from "axios"; 

class SigninForm extends Component {

    onFormSubmit = (event) => {
        event.preventDefault();
        const { username, password } = this.state;
    
        axios.post("http://localhost:5000/signin", { username, password })
            .then(response => console.log(response))
            .catch(err => console.log(err));
    };

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
                <input type="submit" value="Sign In" onChange={this.onFormSubmit}/>
                </form>
                <h3>Forgot Password?</h3>
                <h3>Don't Have An Account?</h3>
                <a href="/register">Register</a>
                
            </div>
            );
  }
}

export default SigninForm; 