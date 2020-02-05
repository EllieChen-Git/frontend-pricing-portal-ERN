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
        <Row className="mt-5">
          <Col lg={6}>
            <Card>
              <Card.Body>
                <Card.Title
                  style={{ fontSize: "2em", fontWeight: "bold" }}
                  className="text-center"
                >
                  Image Uploading
                </Card.Title>
              </Card.Body>
              <Card.Img
                style={{ height: "350px" }}
                variant="top"
                src="image-uploading.gif"
              />
            </Card>
          </Col>
          <Col lg={6}>
            <Card>
              <Card.Body>
                <Card.Title
                  style={{ fontSize: "2em", fontWeight: "bold" }}
                  className="text-center"
                >
                  Image Annotation
                </Card.Title>
              </Card.Body>
              <Card.Img
                style={{ height: "350px" }}
                variant="top"
                src="image-annotation.gif"
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LandingPage;
