import React, { Component } from "react";
import axios from "axios";

class UploadImage extends Component {
  state = {
    selectedFile: null
  };

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
    axios
      .post("{url}", fd, {
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
        <h1>Upload Image</h1>
        <div className="App">
          <input
            style={{ display: "none" }}
            type="file"
            onChange={this.fileSelectedHandler}
            ref={fileInput => (this.fileInput = fileInput)}
          />
          <button onClick={() => this.fileInput.click()}>Choose File</button>
          <button onClick={this.fileUploadHandler}>Upload</button>
        </div>
      </>
    );
  }
}

export default UploadImage;
