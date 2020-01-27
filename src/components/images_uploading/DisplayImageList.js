import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchImages } from "./../../actions";

class DisplayImageList extends Component {
  componentDidMount() {
    this.props.fetchImages();
  }
  render() {
    const { images } = this.props;

    return (
      <ol>
        {images.map(image => {
          return (
            <>
              {/* Warning: Warning: Each child in a list should have a unique "key" prop.
               */}
              <li key={image.s3key}>
                Lot: {image.lot}, Unit Number:
                {image.unitNumber}, Product Descripion:
                {image.productDescription}, s3key:{" "}
                <a
                  href={
                    `${process.env.REACT_APP_BASEURL}/images/` + image.s3key
                  }
                >
                  {image.s3key}
                </a>
              </li>
            </>
          );
        })}
      </ol>
    );
  }
}

const mapStateToProps = state => {
  return {
    images: state.images
  };
};

export default connect(mapStateToProps, { fetchImages })(DisplayImageList);
