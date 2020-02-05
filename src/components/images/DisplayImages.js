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
        <div style={{ fontSize: "1.5em", padding: "3px" }}>
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
          {this.state.value !== "unknown" && (
            <Button variant="info" type="submit" className="ml-2">
              Assign
            </Button>
          )}
        </div>
      </form>
    );
  }
}

class DisplayImages extends Component {
  state = {
    images: this.props.images,
    is_active: true
  };

  componentDidMount() {
    this.props.fetchImages();
    this.props.fetchUsers();
  }

  componentDidUpdate(prevProps) {
    if (this.props.images !== prevProps.images) {
      this.setState({ images: this.props.images });
    }
  }

  imageDeleteHandler = id => {
    LocalApi.patch(`/images/${id}/inactive`, {
      is_active: false
    })
      .then(res => {
        this.props.fetchImages();
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { users } = this.props;
    const { images } = this.state;
    return (
      <ListGroup className="pb-4" style={{ width: "75%", margin: "auto" }}>
        {images.map(image => {
          return (
            <ListGroup.Item key={image._id}>
              <div style={{ fontSize: "1.5em", padding: "3px" }}>
                {" "}
                Lot: {image.lot}
              </div>
              <div style={{ fontSize: "1.5em", padding: "3px" }}>
                Unit Number: {image.unitNumber}
              </div>
              <div style={{ fontSize: "1.5em", padding: "3px" }}>
                Product Description:{image.productDescription}
              </div>

              <UserAssignmentDropDown imageId={image._id} users={users} />

              <Button
                style={{ marginLeft: 3 }}
                variant="success"
                href={`${process.env.REACT_APP_BASEURL}/images/${image._id}/file`}
              >
                Show Floor Plan
              </Button>

              <Button
                id={image._id}
                style={{ marginLeft: 3 }}
                variant="warning"
                href={`/edit/${image._id}`}
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
  DisplayImages
);
