import React, { Component } from "react";
import { Container } from "react-bootstrap";

class LandingPage extends Component {
  render() {
    return (
      <Container>
        <img src="landingpageimage.png" alt="Sydney nightview" />
        <h1>Company</h1>
        <p>
          SkyChute, is a Sydney based technology company that makes software for
          the property industry. SkyChutes' software, is breaking new ground and
          changing the way technology and the building industry relates
        </p>
        <h2>Purpose</h2>
        <p>
          The purpose of this website is image annotation. We hope that through
          the use of this software, various professionals within the
          construction industry will be better able to price their inventory of
          units and properties. This will enable developers and other intrested
          parties to solve problems relating to how best to price their stock.
        </p>
      </Container>
    );
  }
}

export default LandingPage;
