import React, { Component } from "react";
import axios from "axios";

class UploadImageFile extends Component {
  state = {
    selectedFile: null
  };

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files
    });
  };

  fileUploadHandler = event => {
    event.preventDefault();
    const data = new FormData();
    // data.append("file", this.state.selectedFile);

    for (let x = 0; x < this.state.selectedFile.length; x++) {
      data.append("file", this.state.selectedFile[x]);
    }

    console.log(this.state.selectedFile);

    axios
      .post(`http://localhost:5000/images/upload`, data, {
        onUploadProgress: progressEvent => {
          console.log(
            "Upload Progress: " +
              Math.round((progressEvent.loaded / progressEvent.total) * 100) +
              "%"
          );
        }
      })
      .then(res => {
        // then print response status
        console.log(res.statusText);
      });
  };
  render() {
    return (
      <>
        <form onSubmit={this.fileUploadHandler}>
          <label>
            Image:
            <input type="file" multiple onChange={this.fileSelectedHandler} />
          </label>
          <input type="submit" value="Upload File" />
        </form>
      </>
    );
  }
}

export default UploadImageFile;
