import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAnnotationDetails } from "./../../actions";
import ImageAnnotation from "./ImageAnnotation";
import LocalApi from "./../../apis/LocalApi";
import { Container, Col, Row, Button } from "react-bootstrap";

function AnnotationPage(props) {
  let { id } = useParams();
  const { annotation, user } = props;
  if (!annotation || annotation._id !== id) {
    props.fetchAnnotationDetails(id);
    return <p>Loading...</p>;
  }

  let handleNewMarks = m => props.fetchAnnotationDetails(id);
  // Submit annotation by regular user
  let handleSubmit = e =>
    LocalApi.patch("/annotations/" + id + "/review/")
      .then(res => props.fetchAnnotationDetails(id))
      .catch(err => console.log(err));

  // Annotation review process by admin
  let handleApprove = e =>
    LocalApi.patch("/annotations/" + id + "/approve/")
      .then(res => props.fetchAnnotationDetails(id))
      .catch(err => console.log(err));

  let handleReject = e =>
    LocalApi.patch("/annotations/" + id + "/reject/")
      .then(res => props.fetchAnnotationDetails(id))
      .catch(err => console.log(err));

  // Check if the current user is the author of the annotation.
  const isAuthor = user.id === annotation.user_id._id;

  // Only author can modify their annotation if they are in statuses
  // NEW or IN_PROGRESS.
  const isReadOnly =
    !isAuthor ||
    (annotation.status !== "NEW" && annotation.status !== "IN_PROGRESS");

  // Build image URL.
  const image = annotation.image_id;
  const url = `${process.env.REACT_APP_BASEURL}/images/${image._id}/file`;

  return (
    <Container>
      <h1 className="text-center mb-8">Image Annotation</h1>
      <hr />
      <Row>
        <Col md={12} xl={8}>
          <h2>Lot: {annotation.image_id.lot}</h2>
          <h2>Unit: {annotation.image_id.unitNumber}</h2>
          <h4>{annotation.image_id.productDescription}</h4>
        </Col>
        <Col>
          <h4>{annotation.status}</h4>
          {annotation.status === "IN_PROGRESS" && isAuthor && (
            <Button style={{ fontSize: "16px" }} onClick={handleSubmit}>
              Submit for review
            </Button>
          )}
          {annotation.status === "REVIEW" && !isAuthor && (
            <Button
              style={{ fontSize: "16px" }}
              className="m-2"
              onClick={handleApprove}
            >
              Approve
            </Button>
          )}
          {annotation.status === "REVIEW" && !isAuthor && (
            <Button
              style={{ fontSize: "16px" }}
              className="m-2"
              onClick={handleReject}
            >
              Reject
            </Button>
          )}
        </Col>
      </Row>
      <ImageAnnotation
        imageSrc={url}
        id={id}
        marks={annotation.marks}
        handleNewMarks={handleNewMarks}
        isReadOnly={isReadOnly}
      />
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    annotation: state.annotations.current,
    user: state.auth.user
  };
};

export default connect(mapStateToProps, { fetchAnnotationDetails })(
  AnnotationPage
);
