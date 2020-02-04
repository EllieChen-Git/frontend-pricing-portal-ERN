import React, { Component } from 'react'

class UserListItem extends Component {
    state = { isAdmin: false }

    componentDidMount() {
        let {value} = this.props.isAdmin
        this.setState({isAdmin: value})
    }

    componentDidUpdate() {
        if (this.props.isAdmin === undefined) {
            let {trueOrFalse} = this.props.isAdmin
            this.setState({isAdmin: trueOrFalse})
        }
    }
    
    render() {
        // console.log(this.props)
        return (
            <>
                <li key={this.props.id}>
                    {this.props.userName}{this.props.userEmail}
                    <input type="checkbox" onChange={this.props.handleChange} name={this.props.id} checked={this.state.isAdmin} ></input>
                </li>
            </>
        )
    }
}

export default UserListItem
