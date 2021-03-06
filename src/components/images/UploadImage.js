//This is still not a Redux form - will try to refactor to Redux way later

import React, { Component } from "react";
import LocalApi from "../../apis/LocalApi";
import { Form, Button } from "react-bootstrap";
import { fetchImages } from "../../actions";
import { connect } from "react-redux";

class UploadImage extends Component {
  state = {
    selectedFile: null,
    lot: 0,
    unitNumber: "",
    productDescription: ""
  };

  componentDidMount() {
    this.props.fetchImages();
  }

  fileUploadHandler = event => {
    event.preventDefault();

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

        this.props.fetchImages(); //Page will auto fresh (without visiable notice) after you create a new apartment

        this.setState({
          //clear input field (reset to original state) after submitting the form
          selectedFile: null,
          lot: 0,
          unitNumber: "",
          productDescription: ""
        });
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
      <Form
        onSubmit={this.fileUploadHandler}
        style={{ width: "40%", margin: "auto" }}
      >
        <Form.Group>
          <Form.Label
            style={{ fontSize: "1.5em", padding: "3px", fontWeight: "normal" }}
          >
            Lot:
          </Form.Label>
          <Form.Control
            type="number"
            min="1"
            value={lot}
            required="required"
            onChange={event => this.onInputChange("lot", event)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label
            style={{ fontSize: "1.5em", padding: "3px", fontWeight: "normal" }}
          >
            Unit Number:
          </Form.Label>
          <Form.Control
            type="text"
            value={unitNumber}
            placeholder="Enter Unit Number"
            required="required"
            onChange={event => this.onInputChange("unitNumber", event)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label
            style={{ fontSize: "1.5em", padding: "3px", fontWeight: "normal" }}
          >
            Product Description:{" "}
          </Form.Label>
          <Form.Control
            type="text"
            value={productDescription}
            placeholder="Enter Product Description"
            required="required"
            onChange={event => this.onInputChange("productDescription", event)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label
            style={{ fontSize: "1.5em", padding: "3px", fontWeight: "normal" }}
          >
            Floor Plan:{" "}
          </Form.Label>
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

// export default UploadImage;
export default connect(null, { fetchImages })(UploadImage);
