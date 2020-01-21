import React, { Component } from "react";
import axios from "axios";

class UploadImageFile extends Component {
  state = {
    selectedFile: null
  };

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
    // console.log(this.state.selectedFile);
  };

  fileUploadHandler = event => {
    event.preventDefault();
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    // console.log(this.state.selectedFile);
    axios
      .post("http://localhost:5000/images", data, {
        onUploadProgress: progressEvent => {
          console.log(
            "Upload Progress: " +
              Math.round((progressEvent.loaded / progressEvent.total) * 100) +
              "%"
          );
        }
      })
      .then(res => {
        console.log(res);
      });
  };
  render() {
    return (
      <>
        <form onSubmit={this.fileUploadHandler}>
          <label>
            Image:
            <input
              type="file"
              name="file"
              onChange={this.fileSelectedHandler}
            />
          </label>
          <input type="submit" value="Upload File" />
        </form>
      </>
    );
  }
}

export default UploadImageFile;
