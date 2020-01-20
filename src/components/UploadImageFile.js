import React, { Component } from "react";

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
    console.log(this.state.selectedFile.name);
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
