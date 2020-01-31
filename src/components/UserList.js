import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchUsers } from "./../actions";

class UserList extends Component { 
    componentDidMount(){
        this.props.fetchUsers()

    }
    render(){
        const { users } = this.props 
        return(
            <ul>
                { users.map(user => {
                    return(
                        <li key={user._id}>
                            {user.username}{user.email}
                        </li>
                    )
                }) }
            </ul>
        )
    }       
}



const mapStateToProps = state => {
    return {
      users: state.admin.users,
    };
  };
  
  export default connect(mapStateToProps, { fetchUsers })(UserList);



