import React, { Component } from "react";
import axios from "axios";

class UploadImageUrl extends Component {
  //we include two properties within our state.
  state = { url: ""};
  //we create inputChangeHandler  function to grab the value from the input field.
  inputChangeHandler = event => {
    //we update url on state to event.target.value
    this.setState({ url: event.target.value });
  };
  //we create another function, handleSumbit. This controls what happens after a user clicks the submit button.
  inputSubmitHandler = event => {
   //prevent the form from automatically being submitted.
    event.preventDefault();
   // this.setState takes a callback function with the argument of state.
    //this callback function returns the new value of imgUrl.
    

   console.log(this.state.url);
  axios 
    .post("http://localhost:5000/images", {
      images:  [{url: this.state.url}]
    })
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.log(error)
    })
  };

  render() {
    return (
      <>
        <form onSubmit={this.inputSubmitHandler}>
          <label>
            Image:
            <input
              type="text"
              value={this.state.value}
              onChange={this.inputChangeHandler}
            />
          </label>
          <input type="submit" value="Enter Url" />
        </form>
      </>
    );
  }
}

export default UploadImageUrl;
