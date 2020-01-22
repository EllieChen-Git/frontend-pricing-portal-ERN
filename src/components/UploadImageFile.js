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
  };

  fileUploadHandler = event => {
    event.preventDefault();
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    console.log(this.state.selectedFile);

    axios
      .post(`http://localhost:5000/images/upload`, data, {
        // receive two parameter endpoint url ,form data
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
            <input type="file" onChange={this.fileSelectedHandler} />
          </label>
          <input type="submit" value="Upload File" />
        </form>
      </>
    );
  }
}

export default UploadImageFile;
