//Unable to make it happen with Redux - might try to refactor to Redux way later

import React, { Component } from "react";
import LocalApi from "./../../apis/LocalApi";
import { Form, Button } from "react-bootstrap";

class UploadImageFile extends Component {
  state = {
    selectedFile: null,
    lot: 0,
    unitNumber: "",
    productDescription: ""
  };

  fileUploadHandler = event => {
    // event.preventDefault(); // uncomment this line so page will refresh after sumbitting the form (i.e. you will see the newly-added apartment). Not sure if it's the right thing to do here lol
    const { lot, selectedFile, unitNumber, productDescription } = this.state;
    const formData = new FormData();

    if (selectedFile) {
      for (let x = 0; x < selectedFile.length; x++) {
        formData.append("file", selectedFile[x]);
        formData.append("lot", lot);
        formData.append("unitNumber", unitNumber);
        formData.append("productDescription", productDescription);
      }

      console.log(this.state); //Keep this line to see if upload successful in browser console

      LocalApi.post("/images", formData).then(res => {
        console.log(res.statusText);
      });

      //clear input field (reset to original state) after submitting the form
      this.setState({
        selectedFile: null,
        lot: 0,
        unitNumber: "",
        productDescription: ""
      });
    }
  };

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files
    });
  };

  onInputChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { lot, unitNumber, productDescription } = this.state;

    return (
      <Form onSubmit={this.fileUploadHandler}>
        <Form.Group>
          <Form.Label>Lot:</Form.Label>
          <Form.Control
            type="number"
            min="1"
            value={lot}
            required="required"
            onChange={event => this.onInputChange("lot", event)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Unit Number:</Form.Label>
          <Form.Control
            type="text"
            value={unitNumber}
            placeholder="Enter Unit Number"
            required="required"
            onChange={event => this.onInputChange("unitNumber", event)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Product Description: </Form.Label>
          <Form.Control
            type="text"
            value={productDescription}
            placeholder="Enter Product Description"
            required="required"
            onChange={event => this.onInputChange("productDescription", event)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Floor Plan: </Form.Label>
          <Form.Control
            type="file"
            required="required"
            multiple
            onChange={this.fileSelectedHandler}
          />
        </Form.Group>
        <Button variant="info" type="submit">
          Create Apartments
        </Button>
      </Form>
    );
  }
}

export default UploadImageFile;
