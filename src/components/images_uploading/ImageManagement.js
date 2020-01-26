import React, { Component } from "react";
import DisplayImageList from "./DisplayImageList";
import UploadImageFile from "./UploadImageFile";

class ImageManagement extends Component {
  render() {
    return (
      <>
        <h1>Image Management</h1>
        <div>
          <UploadImageFile />
          <DisplayImageList />
        </div>
      </>
    );
  }
}

export default ImageManagement;
