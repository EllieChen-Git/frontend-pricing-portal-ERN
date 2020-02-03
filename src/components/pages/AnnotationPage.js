import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAnnotationDetails } from "../../actions";
import ImageAnnotation from "../ImageAnnotation";
import LocalApi from "../../apis/LocalApi";

function AnnotationPage(props) {
  let { id } = useParams();
  const { annotation, user } = props;
  if (!annotation || annotation._id !== id) {
    props.fetchAnnotationDetails(id);
    return <p>Loading...</p>;
  }

  let handleNewMarks = m => props.fetchAnnotationDetails(id);
  
  let handleSubmit = e => LocalApi.patch("/annotations/" + id + "/review/")
    .then(res => props.fetchAnnotationDetails(id))
    .catch(err => console.log(err));

  let handleApprove = e => LocalApi.patch("/annotations/" + id + "/approve/")
    .then(res => props.fetchAnnotationDetails(id))
    .catch(err => console.log(err));

  // Check if the current user is the author of the annotation.
  const isAuthor = user.id === annotation.user_id._id;

  // Only author can modify their annotation if they are in statuses
  // NEW or IN_PROGRESS.
  const isReadOnly = !isAuthor || (annotation.status !== "NEW" && 
    annotation.status !== "IN_PROGRESS");

  // Build image URL.
  const image = annotation.image_id;
  const url = `${process.env.REACT_APP_BASEURL}/images/${image._id}/file`;

  return (
    <>
      <h2>Status: {annotation.status}</h2>
      {annotation.status === "IN_PROGRESS" && isAuthor && 
        <button onClick={handleSubmit}>Submit for review</button>
      }
      {annotation.status === "REVIEW" && !isAuthor && 
        <button onClick={handleApprove}>Approve</button>
      }
      <hr />
      <ImageAnnotation 
        imageSrc={url}
        id={id}
        marks={annotation.marks}
        handleNewMarks={handleNewMarks}
        isReadOnly={isReadOnly}
      />
    </>
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
