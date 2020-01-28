import React, { Component } from 'react';
import axios from "axios"; 

class RegisterForm extends Component {

        onFormSubmit = (event) => {
            event.preventDefault();
            const { username, email, password } = this.state;
        
            axios.post("http://localhost:5000/", { username, email, password })
                .then(response => console.log(response))
                .catch(err => console.log(err));
        };

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
                <input type="submit" value="Register" onChange={this.onFormSubmit}/>
                </form>
                <h2>All ready have an account with Skychute?</h2>
                <a href="/signin">Sign In</a>
            </div>
            );
  }
}

export default RegisterForm; 