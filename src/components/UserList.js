import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchUsers } from "./../actions";
import LocalApi from '../apis/LocalApi';
import UserListItem from './UserListItem'
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

    renderUsersList =()=> {
        const { users } = this.state 
       return users.map(user => {
            return(
                // <UserListItem 
                // key={user._id} 
                // id={user._id} 
                // userName={user.username} 
                // userEmail={user.email} 
                // onChange={this.handleChange}
                // isAdmin={user.is_admin}/>
                
                <li key={user._id}>
                    {user.username}{user.email}
                    <input onChange = {this.handleChange} type="checkbox" name={user._id} checked={user.is_admin} ></input>
                </li>
                
            )
        })
    }

    findByIdAndUpdate = (id) => {
        this.setState((state) => {
            const newUsers = state.users.map((user) => {
                if (id === user._id) {
                    user.is_admin = !user.is_admin;
                }

                return user;
            });

            return { users: newUsers };
        });

        // let {users} = this.state
        // for (let user of users) {
        //     if (id === user._id) {
        //         console.log(`%c ${user.is_admin}`, 'color: green')
        //         this.setState(...this.state, user.is_admin: "pickle")
        //     }
             
        //     // console.log(`%c ${user._id}`, 'color: green')
        // }
    }
    
    handleChange = (event) => {
    this.findByIdAndUpdate(event.target.name)

     if (this.state.updateAdmin.includes(event.target.name)) {
         this.setState({ updateAdmin: this.state.updateAdmin.filter(element => element !== event.target.name)  })
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
        console.log(this.state.users)
        
    }



    render(){
        
        return(
            <>
            <ul>
                { this.renderUsersList() }
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



