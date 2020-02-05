import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./../../actions";
import LocalApi from "./../../apis/LocalApi";
import { Container, ListGroup, Button } from "react-bootstrap";

class UserList extends Component {
  state = { users: [], updateAdmin: [] };

  usersBackend = () => {
    const { updateAdmin } = this.state;
    LocalApi.put("/users", { updateAdmin })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    alert("You have changed user access!");
  };

  renderUsersList = () => {
    const { users } = this.state;
    return users.map(user => {
      return (
        <ListGroup.Item key={user._id}>
          <div
            style={{ fontSize: "1.5em", padding: "3px", fontWeight: "normal" }}
          >
            Username: {user.username}
          </div>
          <div
            style={{ fontSize: "1.5em", padding: "3px", fontWeight: "normal" }}
          >
            Email: {user.email}
            <input
              onChange={this.handleChange}
              type="checkbox"
              name={user._id}
              checked={user.is_admin}
            ></input>
          </div>
        </ListGroup.Item>
      );
    });
  };
  findByIdAndUpdate = id => {
    this.setState(state => {
      const newUsers = state.users.map(user => {
        if (id === user._id) {
          user.is_admin = !user.is_admin;
        }
        return user;
      });
      return { users: newUsers };
    });
  };

  handleChange = event => {
    this.findByIdAndUpdate(event.target.name);
    if (this.state.updateAdmin.includes(event.target.name)) {
      this.setState({
        updateAdmin: this.state.updateAdmin.filter(
          element => element !== event.target.name
        )
      });
    } else {
      this.setState({
        updateAdmin: [...this.state.updateAdmin, event.target.name]
      });
    }
  };

  componentDidMount() {
    this.props.fetchUsers();
  }
  componentDidUpdate() {
    if (this.state.users !== this.props.users) {
      this.setState({ users: this.props.users });
    }
  }

  render() {
    return (
      <Container>
        <h1 className="text-center">User Management</h1>
        <hr />

        <ListGroup style={{ width: "60%", margin: "auto" }}>
          <Button
            variant="info"
            onClick={this.usersBackend}
            className="mb-3"
            style={{ width: "25%", margin: "auto" }}
          >
            Grant Admin Access
          </Button>
          {this.renderUsersList()}
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.admin.users
  };
};

export default connect(mapStateToProps, { fetchUsers })(UserList);
