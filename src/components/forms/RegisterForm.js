import React, { Component } from 'react';
import LocalApi from '../../apis/LocalApi'
//we create a class that extends our Component. 
class RegisterForm extends Component {
//onFormSumbit is used to handle the event where a user submits the form. 
    onFormSubmit = (event) => {
//we prevent the default behaviour which allows the user to select when they have finished the form. 
        event.preventDefault();
//we create a variable that contains the state of username, email and password. 
        const{username, email, password} = this.state
//we use our import statement to use axios and match our frontend route to the backend. 
//we then pass the three properties we need for the backend, username, email and password. 
        LocalApi.post("users", { username, email, password })
//if this works, we send the data through the backend. 
       .then(response => {
         // Redirect to login page for now.
         console.log(response)
         this.props.history.push("/signin");
       })
//if it doesn't we print out an error message. 
       .catch(error => {
           console.log(error);
           this.setState({ error });
       });
    }
//we create an event handler for when input is changed. 
//we set the value of state to user input for username, email and password. 
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