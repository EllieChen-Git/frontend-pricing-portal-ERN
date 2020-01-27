import React, { Component } from "react";
import DisplayImageList from "./DisplayImageList";
import UploadImageFile from "./UploadImageFile";

class ImageManagement extends Component {
  state = {
    images: []
  };

  render() {
    const { images } = this.state;

    return (
      <>
        <h1>Image Management</h1>
        <div>
          <h3>Create New Apartments</h3>
          <UploadImageFile />
          <h3>Apartment(Image) List</h3>
          <DisplayImageList items={images} />
        </div>
      </>
    );
  }
}

export default ImageManagement;
