import React, {Component} from 'react';
import { connect } from "react-redux";
import { fetchAnnotations } from "../actions";

class AnnotationList extends Component{
  componentDidMount(){
    this.props.fetchAnnotations();
  }

  render(){
    const { annotations } = this.props;
    return (
      <ul>
        {annotations && annotations.map(annotation => {
          const image = annotation.image_id;
          return <li key={annotation._id}>
            {image.lot} {image.unitNumber} {image.productDescription}
          </li>
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    annotations: state.annotations,
  };
};

export default connect(mapStateToProps, { fetchAnnotations })(AnnotationList);