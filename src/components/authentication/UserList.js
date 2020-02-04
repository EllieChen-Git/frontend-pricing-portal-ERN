import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./../../actions";
import LocalApi from "./../../apis/LocalApi";
import { Container, ListGroup } from "react-bootstrap";

class UserList extends Component {
  state = { users: [], updateAdmin: [] };

  usersBackend = () => {
    const { updateAdmin } = this.state;
    LocalApi.put("/users", { updateAdmin })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  renderUsersList = () => {
    const { users } = this.state;
    return users.map(user => {
      return (
        <ListGroup.Item key={user._id}>
          <div>Username: {user.username}</div>
          Email: {user.email}
          <input
            onChange={this.handleChange}
            type="checkbox"
            name={user._id}
            checked={user.is_admin}
          ></input>
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
        <button onClick={this.usersBackend}>Grant Admin Access</button>
        <ListGroup>{this.renderUsersList()}</ListGroup>
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
