import React, { Component } from 'react';
import LocalApi from '../../apis/LocalApi'

class SigninForm extends Component {

    onFormSubmit = (event) => {
        event.preventDefault();
        const {username, password} = this.state

        LocalApi.post("/users/login", { username, password })
       .then(response => {
         // Redirect to login page for now.
         console.log(response)
         this.props.history.push("/");
       })
       .catch(error => {
           console.log(error);
           console.log("not working")
           this.setState({ error });
       });
    }

    onInputChange = (name, event) => {
        this.setState({ [name]: event.target.value });
    };    


    render() {
        return (
            <div>
                <h1>Sign In</h1>
                <form onClick={this.handleClick} onSubmit={this.onFormSubmit}>
                <label>Username:</label>
                <input type="text" onChange={e => this.onInputChange('username', e)} />
                <label>Password: </label>
                <input type="password" onChange= {e => this.onInputChange('password', e)}/>
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