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
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar; 
