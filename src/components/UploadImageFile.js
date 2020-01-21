import React, { Component } from "react";
import axios from "axios";

class UploadImageFile extends Component {
  state = {
    message: ""
  };

  getImage = event => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      this.setState({ file });
      //if there is a chosen file, then add 'file' to state
    }
  };

  uploadFile = event => {
    event.preventDefault();
    const { file } = this.state;
    this.setState({ message: "Uploading..." });
    const contentType = file.type; // eg. image/jpeg or image/svg+xml
    // grab the content type from the file type of the file you just uploaded
    const generatePutUrl = "http://localhost:5000/generate-put-url";
    const options = {
      params: {
        Key: file.name,
        ContentType: contentType
      },
      headers: {
        "Content-Type": contentType
        // "Access-Control-Allow-Origin": "*"
      }
    };

    axios.get(generatePutUrl, options).then(res => {
      const {
        data: { putURL }
      } = res;
      axios
        .put(putURL, file, options)
        .then(res => {
          this.setState({ message: "Upload Successful" });
          setTimeout(() => {
            this.setState({ message: "" });
            document.querySelector("#upload-image").value = "";
          }, 2000);
        })
        .catch(err => {
          this.setState({ message: "Sorry, something went wrong" });
          console.log("err", err);
        });
    });
  };

  render() {
    return (
      <>
        <input
          id="upload-image"
          type="file"
          accept="image/*"
          onChange={this.getImage}
        />
        <p>{this.state.message}</p>
        <form onSubmit={this.uploadFile}>
          <button id="file-upload-button">Upload</button>
        </form>
      </>
    );
  }
}

export default UploadImageFile;
