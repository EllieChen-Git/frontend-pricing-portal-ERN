import React, { Component, useReducer } from "react";
import { connect } from "react-redux";
import { fetchImages, fetchUsers } from "./../../actions";
import LocalApi from "../../apis/LocalApi";
import { ListGroup, Button } from "react-bootstrap";

class UserAssignmentDropDown extends React.Component {
  state = { value: "unknown" };

  handleChange = e => this.setState({ value: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    LocalApi.post("annotations/", {
      image_id: this.props.imageId,
      user_id: this.state.value
    }).catch(err => console.log(err));
    this.setState({ value: "unknown" });
  };

  render() {
    const { users } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        Assign Users:
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="unknown">Choose one</option>
          {users &&
            users.map(user => {
              return (
                <option key={user._id} value={user._id}>
                  {user.username}
                </option>
              );
            })}
        </select>
        {this.state.value !== "unknown" && ( // Show submit buttion only when selected a user.
          <input type="submit" value="Assign" />
        )}
      </form>
    );
  }
}

class DisplayImageList extends Component {
  componentDidMount() {
    this.props.fetchImages();
    this.props.fetchUsers();
  }
  render() {
    const { images, users } = this.props;

    return (
      <ListGroup>
        {images.map(image => {
          return (
            <ListGroup.Item key={image._id}>
              <div> Lot: {image.lot}</div>
              <div> Unit Number: {image.unitNumber}</div>
              <div> Product Description:{image.productDescription}</div>

              <UserAssignmentDropDown imageId={image._id} users={users} />
              {/* <a
                href={`${process.env.REACT_APP_BASEURL}/images/${image.s3key}`}
              >
                Show Floor Plan
              </a> */}

              <Button
                variant="success"
                href={`${process.env.REACT_APP_BASEURL}/images/${image.s3key}`}
              >
                Show Floor Plan
              </Button>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  }
}

const mapStateToProps = state => {
  return {
    images: state.images,
    users: state.admin.users
  };
};

export default connect(mapStateToProps, { fetchImages, fetchUsers })(
  DisplayImageList
);
