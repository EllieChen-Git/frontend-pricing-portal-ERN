import React, { Component } from "react";
// import UploadImageUrl from "./components/UploadImageUrl";
import UploadImageFile from "./components/UploadImageFile";
// import DisplayImage from "./components/DisplayImage";

class App extends Component {
  render() {
    return (
      <>
        <h1>Pricing Portal</h1>
        {/* <h3>Upload Images with Url</h3>
        <UploadImageUrl /> */}
        <h3>Upload Images with File</h3>
        <UploadImageFile />
        {/* <h3>Display Images</h3>
        <DisplayImage /> */}
      </>
    );
  }
}

export default App;
