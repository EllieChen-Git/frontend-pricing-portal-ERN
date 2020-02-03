import React, { Component } from "react";
import DisplayImageList from "./DisplayImageList";
import UploadImageFile from "./UploadImageFile";
import { Container } from "react-bootstrap";

class ImageManagement extends Component {
  state = {
    images: []
  };

  render() {
    const { images } = this.state;

    return (
      <Container>
        <h1>Apartment Management</h1>
        <div>
          <h3>Create New Apartments</h3>
          <UploadImageFile />
          <h3>List of Apartments</h3>
          <DisplayImageList items={images} />
        </div>
      </Container>
    );
  }
}

export default ImageManagement;
