import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./../../actions";
import LocalApi from "./../../apis/LocalApi";
import { Container, ListGroup } from "react-bootstrap";

class UserList extends Component {
  state = { users: [], updateAdmin: [] };

  usersBackend = () => {
    const { updateAdmin } = this.state;
    console.log(updateAdmin);
    LocalApi.put("/users", { updateAdmin })
      .then(r => console.log("This is working fine!"))
      .catch(e => console.log(e));
  };

  handleChange = event => {
    if (this.state.updateAdmin.includes(event.target.name)) {
      this.setState({
        updateAdmin: this.state.updateAdmin.filter(
          element => element !== event.target.name
        )
      });
      console.log(this.state.updateAdmin);
    } else {
      this.setState({
        updateAdmin: [...this.state.updateAdmin, event.target.name]
      });
      console.log("line 28 is running");
    }
    console.log(this.state.updateAdmin);
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
    const { users } = this.state;
    return (
      <Container>
        <h1>User Management</h1>
        <hr />
        <ListGroup>
          {users.map(user => {
            return (
              <ListGroup.Item key={user._id}>
                <div>Username: {user.username}</div>
                Email: {user.email}
                <input
                  onChange={this.handleChange}
                  type="checkbox"
                  name={user._id}
                ></input>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
        <button onClick={this.usersBackend}>Grant Admin Access</button>
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
