import React, { Component } from "react";
import DisplayImages from "./DisplayImages";
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
        <h1 className="text-center">Apartment Management</h1>
        <hr />
        <div>
          <h3>Create New Apartments</h3>
          <UploadImage />
          <hr />
          <h3>List of Apartments</h3>
          <DisplayImages items={images} />
        </div>
      </Container>
    );
  }
}

export default ImageManagement;
