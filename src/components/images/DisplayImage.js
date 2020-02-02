import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchImages, fetchUsers } from "../../actions";
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

class DisplayImage extends Component {
  state = {
    images: this.props.images
  };

  componentDidMount() {
    this.props.fetchImages();
    this.props.fetchUsers();
  }

  componentDidUpdate(prevProps) {
    if (this.props.images !== prevProps.images) {
      this.setState({ images: this.props.images });
      console.log(this.props);
    }
  }

  imageDeleteHandler = id => {
    for (let i = 0; i < this.props.images.length; i++) {
      if (this.props.images[i]._id === id) {
        LocalApi.delete(`images/${this.props.images[i]._id}`)
          .then(console.log("Deleted"))
          .catch(err => console.log(err));
        this.props.fetchImages();
      }
    }
  };

  render() {
    const { users } = this.props;
    const { images } = this.state;
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
                style={{ marginLeft: 3 }}
                variant="success"
                href={`${process.env.REACT_APP_BASEURL}/images/${image.s3key}`}
              >
                Show Floor Plan
              </Button>

              <Button
                id={image._id}
                style={{ marginLeft: 3 }}
                variant="warning"
                href={`/edit/${image._id}`}
                // I tried to change this one to link, but the app will break if I do so. At this moment, I decided to leave it as href.
                onClick={e => this.imageUpdateHandler(image._id)}
              >
                Edit Apartment
              </Button>
              <Button
                id={image._id}
                style={{ marginLeft: 3 }}
                variant="danger"
                onClick={e => this.imageDeleteHandler(image._id)}
              >
                Delete
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
  DisplayImage
);
