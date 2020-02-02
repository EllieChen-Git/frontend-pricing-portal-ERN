import React, { Component } from "react";
import DisplayImage from "./DisplayImage";
import UploadImage from "./UploadImage";
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
          <UploadImage />
          <h3>List of Apartments</h3>
          <DisplayImage items={images} />
        </div>
      </Container>
    );
  }
}

export default ImageManagement;
