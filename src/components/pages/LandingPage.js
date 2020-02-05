import React, { Component } from "react";
import { Container, Jumbotron, Card, Row, Col } from "react-bootstrap";

class LandingPage extends Component {
  render() {
    const Background = "landingpageimage.png";
    return (
      <Container>
        <Row>
          <Jumbotron
            fluid
            style={{
              backgroundImage: `url(${Background})`,
              opacity: "0.9",
              zIndex: "-1"
            }}
          >
            <h1 style={{ color: "white" }}>Pricing Portal</h1>
            <p style={{ color: "white", width: "50%" }}>
              The system aims at accurate manual image annotation of property
              features on apartment floor plans, in order to effectively
              evaluate apartment pricing.
            </p>
          </Jumbotron>
        </Row>
        <Row>
          <Col lg={6}>
            <Card>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title style={{ fontSize: "2em" }} className="text-center">
                  Image Uploading
                </Card.Title>
                {/* <Card.Text>How you create apartment and upload iamge</Card.Text> */}
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title style={{ fontSize: "2em" }} className="text-center">
                  Image Annotation
                </Card.Title>
                {/* <Card.Text>How you implement image annotation</Card.Text> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LandingPage;
