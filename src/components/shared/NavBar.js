import React, { Component } from 'react';
import { Navbar, Nav, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends Component {
    render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">SkyShute</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="signin">Sign In</Nav.Link>
            <Nav.Link href="register">Register</Nav.Link>
            {/* }
            <Nav.Link href="createprojects">Create Projects</Nav.Link>
            <Nav.Link href="createbuildings">Create Buildings</Nav.Link>
            <Nav.Link href="createlevels">Create Levels</Nav.Link>
            <Nav.Link href="createapartments">Create Apartments</Nav.Link>
            <Nav.Link href="usermanagement">User Management</Nav.Link>
            <Nav.Link href="userdashboard">User Dashboard</Nav.Link>
            <Nav.Link href="userbuildings">User Buildings</Nav.Link>
            {*/}
            <Nav.Link href="annoate">User Annotation</Nav.Link>
            <Nav.Link href="images">Manage Images</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;
