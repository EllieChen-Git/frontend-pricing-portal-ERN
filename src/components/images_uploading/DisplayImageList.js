import React, { Component, useReducer } from "react";
import { connect } from "react-redux";
import { fetchImages, fetchUsers } from "./../../actions";
import LocalApi from "../../apis/LocalApi";


class UserAssignmentDropDown extends React.Component {
  state = {value: "unknown"};

  handleChange = (e) => this.setState({value: e.target.value});

  handleSubmit = (e) => {
    e.preventDefault();
    LocalApi.post("annotations/",
      {image_id: this.props.imageId, user_id: this.state.value})
      .then(res => this.state.value="unknown")
      .catch(err => console.log(err));
  }

  render() {
    const {users} = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="unknown">Choose one</option>
          {users && users.map(user => {
            return (
              <option key={user._id} value={user._id}>{user.username}</option>
            );
          })}
        </select>
        {this.state.value !== "unknown" && // Show submit buttion only when selected a user.
          <input type="submit" value="Assign" />}
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
      <ul>
        {images.map(image => {
          return (
              <li key={image._id}>
                {image.lot} {image.unitNumber} {image.productDescription}
                <UserAssignmentDropDown imageId={image._id} users={users} />
              </li>
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
