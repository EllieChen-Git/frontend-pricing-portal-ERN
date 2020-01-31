import React, { Component } from "react";
import { Card, Button, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class ProjectCard extends Component {
    render() {

        /*
        Our data is avalibe under the props system becasue Create PRoject passed the data down. 
        Therefore we must access it by this.props
        */
       
        return (
<Card style={{ width: '18rem' }}>
    <Card.Body>
    <Card.Title>Project Name</Card.Title>
    <form>
        Title:
    <h6>{this.props.title}</h6>
    <h6>Description: {this.props.description}</h6>
    </form>
    <Button>Edit</Button>
    <Button>Delete</Button>
  </Card.Body>
</Card>
        )
    };
};
export default ProjectCard;