import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchUsers } from "./../actions";
import LocalApi from '../apis/LocalApi';
// import { ToggleButtonGroup } from 'react-bootstrap';

class UserList extends Component { 
    state = { users: [], updateAdmin: [] }

    
    //local api- post to backend on click. 
    usersBackend = () => {
        const {updateAdmin } = this.state
        console.log(updateAdmin)
        LocalApi.put("/users", {updateAdmin})
        .then((r) => console.log("This is working fine!"))
        .catch((e) => console.log(e))
    };
    

    
    // reloadTags = () => {
    //     LocalApi.get("/tags")
    //     .then((r) => this.setState({tags: r.data}))
    //     .catch((e) => console.log(e));  // TODO: Proper Error handling.
    //   }
    
    
    handleChange = (event) => {
     if (this.state.updateAdmin.includes(event.target.name)) {
         this.setState({ updateAdmin: this.state.updateAdmin.filter(element => element !== event.target.name) })
         console.log(this.state.updateAdmin)
    
     } else {
        this.setState({updateAdmin: [...this.state.updateAdmin, event.target.name]});
        console.log("line 28 is running")
     } 
        console.log(this.state.updateAdmin)
    }

    componentDidMount(){
        this.props.fetchUsers()
    }

    componentDidUpdate() {
        // console.log(this.state.updateAdmin)
        if (this.state.users !== this.props.users) {
            this.setState( {users: this.props.users} )
        }
        
    }

    render(){
        const { users } = this.state 
        return(
            <>
            <ul>
                { users.map(user => {
                    return(
                        
                        <li key={user._id}>
                            {user.username}{user.email}
                            <input onChange = {this.handleChange} type="checkbox" name={user._id}></input>
                        </li>
                        
                    )
                }) }
            </ul>
            <button onClick = {this.usersBackend} >Update Admins</button>
            </>
        )
    }       
}

const mapStateToProps = state => {
    return {
      users: state.admin.users,
    };
  };
  
  export default connect(mapStateToProps, { fetchUsers })(UserList);



