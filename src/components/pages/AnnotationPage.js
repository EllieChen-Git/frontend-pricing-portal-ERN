import React, {Component}  from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchAnnotationDetails } from "../../actions";
import ImageAnnotation from "../ImageAnnotation";

function AnnotationPage (props) {
  let { id } = useParams();
  const { annotation } = props;
  if (!annotation || annotation._id != id) {
    props.fetchAnnotationDetails(id);
    return <p>Loading...</p>;
  }
  const image = annotation.image_id;
  const url = `${process.env.REACT_APP_BASEURL}/images/${image.s3key}`;
  return <ImageAnnotation imageSrc={url} />;
}

const mapStateToProps = state => {
  return {
    annotation: state.annotations.current,
  };
};

export default connect(mapStateToProps, { fetchAnnotationDetails })(AnnotationPage);