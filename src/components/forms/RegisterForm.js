import React, { Component } from 'react';
import LocalApi from '../../apis/LocalApi'

class RegisterForm extends Component {
  
    onFormSubmit = (event) => {
        event.preventDefault();
        const{username, email, password} = this.state
        LocalApi.post("users", { username, email, password })
       .then(response => {
         // Redirect to login page for now.
         console.log(response)
         this.props.history.push("/signin");
       })
       .catch(error => {
           console.log(error);
           this.setState({ error });
       });
    }

    onInputChange = (name, event) => {
        this.setState({ [name]: event.target.value });
    };    

    render() {
        return (
            <div>
                <form onClick={this.handleClick} onSubmit={this.onFormSubmit}>
                    <label>Username:</label>
                    <input type="text" onChange={e => this.onInputChange('username', e)} />
                    <label>Email:</label>
                    <input type="email" onChange={e => this.onInputChange('email', e)} />
                    <label>Password:</label>
                    <input type="password" onChange= {e => this.onInputChange('password', e)} />
                    <input type="submit" value="Register"/>
                </form>
                <h2>All ready have an account with Skychute?</h2>
                <a href="/signin">Sign In</a>
            </div>
            );
        }
};



export default RegisterForm; 