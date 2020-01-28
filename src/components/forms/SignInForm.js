import React, { Component } from 'react';
import LocalApi from '../../apis/LocalApi'

class SigninForm extends Component {
//we create a class. 
//we create an event handler. 
    onFormSubmit = (event) => {
//we prevent the default behaviour of our event, 
        event.preventDefault();
//we create a variable that contains the state of our username and password. 
        const {username, password} = this.state
//we use axios through our import of LocalApi, to post to our backend the username and password. 
        LocalApi.post("/users/login", { username, password })
//if we successfully post to our backend we then return to the home page. 
       .then(response => {
         // Redirect to login page for now.
         console.log(response)
         this.props.history.push("/");
       })
//otherwise, we console.log what our error is. 
       .catch(error => {
           console.log(error);
           console.log("not working")
           this.setState({ error });
       });
    }
//we create an event handler that takes two arguments name and event and put it through a function
//we set the value of our state to the events with the users input for username and password. 
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