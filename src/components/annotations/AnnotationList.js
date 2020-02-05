import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAnnotations } from "./../../actions";
import { Container, ListGroup, Row, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const statusColourSchema = {
  NEW: "success",
  IN_PROGRESS: "warning",
  REVIEW: "light",
  COMPLETED: "light"
};

const statusShowOrder = {
  NEW: 2,
  IN_PROGRESS: 1,
  REVIEW: 3,
  COMPLETED: 4
}

class AnnotationList extends Component {
  componentDidMount() {
    this.props.fetchAnnotations();
  }

  render() {
    const { annotations } = this.props;
    annotations.sort((l, r) => {
      return statusShowOrder[l.status] - statusShowOrder[r.status];
    });
    return (
      <Container>
        <Row>
          <Col>
            <h1>Apartments Assigned to Me</h1>
            <ListGroup>
              {annotations &&
                annotations.map(annotation => {
                  const image = annotation.image_id;
                  return (
                    <ListGroup.Item
                      key={annotation._id}
                    >
                      <Badge variant={statusColourSchema[annotation.status]} style={{fontSize: "1.5em"}}>
                        {annotation.status}
                      </Badge>
                      <h3> Lot: {image.lot} </h3>
                      <h3>Unit: {image.unitNumber}</h3>
                      <h5>Product Description: {image.productDescription}</h5>
                      <Link to={"annotations/" + annotation._id} style={{fontSize: "1.5em"}}>
                        Go to Annotation
                      </Link>
                    </ListGroup.Item> 
                  );
                })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    annotations: state.annotations.all
  };
};

export default connect(mapStateToProps, { fetchAnnotations })(AnnotationList);