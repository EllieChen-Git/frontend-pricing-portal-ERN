import React, { Component } from "react";
import DisplayImageList from "./DisplayImageList";
import UploadImageFile from "./UploadImageFile";
import { Container } from "react-bootstrap";

class ImageManagement extends Component {
  // const { token } = this.props;

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
          <UploadImageFile
          // token={token}
          // fileUploadHandler={this.fileUploadHandler}
          />
          <h3>Apartment List</h3>
          <DisplayImageList items={images} />
        </div>
      </Container>
    );
  }
}

export default ImageManagement;
