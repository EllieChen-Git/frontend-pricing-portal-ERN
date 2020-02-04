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
        <h1>Review List</h1>
        <ListGroup>
          {annotations &&
            annotations.map(annotation => {
              const image = annotation.image_id;
              if (annotation.status !== "REVIEW") {
                return null; //check remove null
              }
              return (
                <ListGroup.Item key={annotation._id}>
                  <div> Lot: {image.lot}</div>
                  <div> Unit Number: {image.unitNumber}</div>
                  <div> Product Description:{image.productDescription}</div>
                  <div> Status:{annotation.status}</div>
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
