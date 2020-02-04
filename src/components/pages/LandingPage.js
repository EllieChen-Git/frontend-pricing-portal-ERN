import React, { Component } from "react";
import { Container } from "react-bootstrap";

class LandingPage extends Component {
  render() {
    return (
      <Container>
        <h1 className="text-center">Pricing Portal</h1>

        <img src="landingpageimage.png" alt="Sydney nightview" />
        <h2>Purpose</h2>
        <p>
          The purpose of this website is to allow accurate manual image
          annotation of property features within apartment floor plans, in order
          to more effectively evaluate apartment pricing. In the future, this
          will also allow future incoporation with computer vision and machine
          learning.
        </p>
      </Container>
    );
  }
}

export default LandingPage;
