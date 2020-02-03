import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAnnotations } from "./../../actions";
import { Container, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class AnnotationList extends Component {
  componentDidMount() {
    this.props.fetchAnnotations();
  }

  render() {
    const { annotations } = this.props;
    // console.log(this.props);
    return (
      <Container>
        <h1>Apartments Assigned to Me</h1>
        <ListGroup>
          {annotations &&
            annotations.map(annotation => {
              const image = annotation.image_id;
              // const image = annotation._id; //Ellie
              console.log(image);

              //need to change to 'const image = annotation._id;'
              //when we assign image to users, it didn't pass to users
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

export default connect(mapStateToProps, { fetchAnnotations })(AnnotationList);
