//Unable to make it happen with Redux - might try to refactor to Redux way later

import React, { Component } from "react";
import axios from "axios";

class UploadImageFile extends Component {
  state = {
    selectedFile: null,
    lot: 0,
    unitNumber: "",
    productDescription: ""
  };

  fileUploadHandler = event => {
    event.preventDefault();
    const { lot, selectedFile, unitNumber, productDescription } = this.state;
    const formData = new FormData();

    //At this moment, if create apt without attaching an img, the app will break. Need to fix it later.
    for (let x = 0; x < selectedFile.length; x++) {
      formData.append("file", selectedFile[x]);
      formData.append("lot", lot);
      formData.append("unitNumber", unitNumber);
      formData.append("productDescription", productDescription);
    }

    console.log(this.state); //Keep this line to see if upload successful in browser console

    axios
      .post(`${process.env.REACT_APP_BASEURL}/images`, formData)
      .then(res => {
        console.log(res.statusText);
      });
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
      <>
        <form onSubmit={this.fileUploadHandler}>
          <div>
            <label htmlFor="lot">Lot: </label>
            <input
              type="text"
              value={lot}
              name="lot"
              onChange={event => this.onInputChange("lot", event)}
            />
          </div>
          <div>
            <label htmlFor="unitNumber">Unit Number: </label>
            <input
              type="text"
              value={unitNumber}
              name="unitNumber"
              onChange={event => this.onInputChange("unitNumber", event)}
            />
          </div>
          <div>
            <label htmlFor="productDescription">Product Description: </label>
            <input
              type="text"
              value={productDescription}
              name="productDescription"
              onChange={event =>
                this.onInputChange("productDescription", event)
              }
            />
          </div>
          <div>
            <label>
              Image:
              <input type="file" multiple onChange={this.fileSelectedHandler} />
            </label>
          </div>
          <div>
            <input type="submit" value="Upload File" />
          </div>
        </form>
      </>
    );
  }
}

export default UploadImageFile;
