import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchImages, fetchUsers } from "./../../actions";
import LocalApi from "../../apis/LocalApi";
import { ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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

              <Button
                variant="success"
                href={`${process.env.REACT_APP_BASEURL}/images/${image.s3key}`}
              >
                {/* this one can't be changed to Link to. Btw, why is 'link to' better than href? 'Link to' wil attach url prefix 'http://localhost:3000' to the link you set up. For example, if I change the code below to link to, the url will become 'http://localhost:3000/http://localhost:5000/images/07cea77f-a2ff-422f-ab35-3e918a025262.jpeg', which is not the route we want to have to show image.
                 */}
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
