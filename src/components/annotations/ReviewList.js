import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAnnotations } from "./../../actions";
import { Container, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class ReviewList extends Component {
  componentDidMount() {
    this.props.fetchAnnotations();
  }

  render() {
    const { annotations } = this.props;
    return (
      <Container>
        <h1 className="text-center pb-2">Review List</h1>
        <hr />
        <ListGroup style={{ width: "60%", margin: "auto" }}>
          {annotations &&
            annotations.map(annotation => {
              const image = annotation.image_id;
              if (annotation.status !== "REVIEW") {
                return null; //check remove null
              }
              return (
                <ListGroup.Item key={annotation._id}>
                  <div
                    style={{
                      fontSize: "1.5em",
                      padding: "3px",
                      fontWeight: "normal"
                    }}
                  >
                    Lot: {image.lot}
                  </div>
                  <div
                    style={{
                      fontSize: "1.5em",
                      padding: "3px",
                      fontWeight: "normal"
                    }}
                  >
                    Unit Number: {image.unitNumber}
                  </div>
                  <div
                    style={{
                      fontSize: "1.5em",
                      padding: "3px",
                      fontWeight: "normal"
                    }}
                  >
                    Product Description:{image.productDescription}
                  </div>
                  <div
                    style={{
                      fontSize: "1.5em",
                      padding: "3px",
                      fontWeight: "normal"
                    }}
                  >
                    Status:{annotation.status}
                  </div>
                  <Link to={"annotations/" + annotation._id}>
                    <Button variant="success"> Go to Annotation</Button>
                  </Link>
                </ListGroup.Item>
              );
            })}
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    annotations: state.annotations.all
  };
};

export default connect(mapStateToProps, { fetchAnnotations })(ReviewList);
