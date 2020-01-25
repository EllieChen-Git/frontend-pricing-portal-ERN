import React, { Component } from "react";
import axios from "axios";
import DisplayImage from "./../images_uploading/DisplayImage";
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

    for (let x = 0; x < this.state.selectedFile.length; x++) {
      data.append("file", this.state.selectedFile[x]);
    }

    console.log(this.state.selectedFile);

    axios
      .post(`${process.env.REACT_APP_BASEURL}/images/upload`, data, {
        onUploadProgress: progressEvent => {
          console.log(
            "Upload Progress: " +
              Math.round((progressEvent.loaded / progressEvent.total) * 100) +
              "%"
          );
        }
      })
      .then(res => {
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
        <div>
          <DisplayImage />
        </div>
      </>
    );
  }
}

export default UploadImageFile;
