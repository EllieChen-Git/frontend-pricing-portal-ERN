import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchImages, fetchUsers } from "./../../actions";
import { Button } from "react-bootstrap";

class DisplayImageList extends Component {
  componentDidMount() {
    this.props.fetchImages();
    this.props.fetchUsers();
  }
  render() {
    const { images, users } = this.props;

    return (
      <ul>
        {images.map(image => {
          return (
            <>
              <li key={image._id}>
                Unit Number:
                {image.unitNumber}
                <Button
                  className="m-2"
                  href={`${process.env.REACT_APP_BASEURL}/images/${image.s3key}`}
                >
                  Show Floor Plan
                </Button>
                {/* The button below is currently doing nothing! */}
                <Button
                  className="m-2"
                  href={`${process.env.REACT_APP_BASEURL}/images/${image.s3key}/annotate`}
                >
                  Add Annotation
                </Button>
              </li>
            </>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    images: state.images,
    users: state.admin.users
  };
};

export default connect(mapStateToProps, { fetchImages, fetchUsers })(DisplayImageList);
