import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAnnotationDetails } from "./../../actions";
import ImageAnnotation from "./ImageAnnotation";

function AnnotationPage(props) {
  let { id } = useParams();
  const { annotation } = props;
  if (!annotation || annotation._id !== id) {
    props.fetchAnnotationDetails(id);
    return <p>Loading...</p>;
  }

  let handleNewMarks = m => props.fetchAnnotationDetails(id);

  const image = annotation.image_id;
  const url = `${process.env.REACT_APP_BASEURL}/images/${image._id}/file`;
  return (
    <ImageAnnotation
      imageSrc={url}
      id={id}
      marks={annotation.marks}
      handleNewMarks={handleNewMarks}
    />
  );
}

const mapStateToProps = state => {
  return {
    annotation: state.annotations.current
  };
};

export default connect(mapStateToProps, { fetchAnnotationDetails })(
  AnnotationPage
);
