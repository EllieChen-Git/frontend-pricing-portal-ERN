import React, { Component } from "react";
import ProjectCard from "../shared/ProjectCard";
import { Card, Button, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

class CreateProjects extends Component {

state = {allCards: []} // Init state with empty array

/*
componentDidMount is a function that is called when the component mounts 
make hhtp req to fake db
set state to the response.data

*/
componentDidMount() {
    axios.get("http://localhost:3000/projects")
    .then(response => {
    this.setState({ allCards: response.data})
        }
    )
    // console.log(`%c Mr pickles`, 'color: blue')
}

/*
Create function to create an array of jsx
When called it will iterate over our state (which is an array of objects)
and provide our Project card with data. 

Therefore we must address the ProjectCard
*/

renderAllProjects () {
    return this.state.allCards.map(project => {
      return (
        <ProjectCard title={project.title} id={project.id} description={project.description}/>
      )
    })
  }


// displayCards =()=> {
//     this.state.allCards.map( (project)=>{
//         <>
//         <ProjectCard/>
//         </>
//     })
// }

    render() {
        
        return (
            <div>
                <h1>Create Projects</h1>
                <form>
                Project Name:
                <input name="name" type="text" />
                Project Description:
                <input name="name" type="text" />
                <button type="button">Add Project</button>
                </form>
                {/* We must call it like a normal function */}
                {this.renderAllProjects() || "Loading"}
            </div>
        )
    };
};
export default CreateProjects;