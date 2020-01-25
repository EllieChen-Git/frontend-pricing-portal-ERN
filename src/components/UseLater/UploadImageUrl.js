import React, { Component } from "react";
import axios from "axios";

class UploadImageUrl extends Component {
  state = { title: "", url: "" };

  titleChangeHandler = event => {
    this.setState({ title: event.target.value });
  };

  urlChangeHandler = event => {
    this.setState({ url: event.target.value });
  };

  inputSubmitHandler = event => {
    event.preventDefault();
    console.log(this.state);
    axios
      .post(`${process.env.REACT_APP_BASEURL}/images`, {
        images: [{ title: this.state.title, url: this.state.url }]
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <form onSubmit={this.inputSubmitHandler}>
          <label>
            Image Title:
            <div>
              <input
                type="text"
                value={this.state.value}
                onChange={this.titleChangeHandler}
              />
            </div>
          </label>
          <label>
            Image Url:
            <div>
              <input
                type="text"
                value={this.state.value}
                onChange={this.urlChangeHandler}
              />
            </div>
          </label>

          <input type="submit" value="Enter Image Info" />
        </form>
      </>
    );
  }
}

export default UploadImageUrl;
