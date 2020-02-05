import React, { Component } from "react";
import Tags from "./Tags";
import Canvas from "./Canvas";
import LocalApi from "./../../apis/LocalApi";
import Marks from "./Marks"
import {Container, Row, Col} from "react-bootstrap"

class ImageAnnotation extends Component {
  state = {
    selectedTag: null,
    hoveredCoordinates: null
  };

  // update state with the coordinates
  handleNewCoordinate = coordinates => {
    if (this.props.isReadOnly === true) {
      console.log("Read-only annotation.");
      return;
    }
    const { selectedTag } = this.state;
    const { marks } = this.props;

    if (!selectedTag) {
      console.log("No tag selected.");
      return;
    }
    let newMarks = [...marks];
    // Erase tag and coordinate info so we send only what API requires.
    for (let i in newMarks) {
      const tmp_id = newMarks[i].tag_id._id;
      newMarks[i].tag_id = tmp_id;
      delete newMarks[i]._id;
      for (let j in newMarks[i].coordinates) {
        delete newMarks[i].coordinates[j]._id;
      }
    }
    let selectedMark = null;
    // Find selected tag in the marks and put its reference to
    // selectedMark.
    for (let i in newMarks) {
      if (newMarks[i].tag_id === selectedTag._id) {
        // make reference to an alement in array newMarks
        selectedMark = newMarks[i];
        break;
      }
    }
    if (selectedMark === null) {
      selectedMark = {
        tag_id: selectedTag._id,
        coordinates: []
      };
      newMarks.push(selectedMark);
    }
    selectedMark.coordinates.push(coordinates);
    const path = "annotations/" + this.props.id + "/marks";
    LocalApi.put(path, { marks: newMarks })
      .then(res => this.props.handleNewMarks(res.data))
      .catch(err => console.log(err));
  };

  handleHoverCoordinates = (coordinates) => {
    this.setState({hoveredCoordinates: coordinates})
  }

  handleDeleteCoordinates = (coordinates) => {
    const { marks } = this.props;
    let result = []
    for(let i in marks){
      let resultMark = {
        tag_id: marks[i].tag_id._id,
        coordinates: []
      };
      for(let j in marks[i].coordinates){
        // skip the coordinates we are deleting
        if(marks[i].coordinates[j]._id === coordinates._id){
          continue;
        }
        resultMark.coordinates.push(
          {
            x: marks[i].coordinates[j].x, 
            y: marks[i].coordinates[j].y
          }
        );
      }
      // Don't add empty marks.
      if (resultMark.coordinates.length > 0) {
        result.push(resultMark);
      }
    }
    const path = "annotations/" + this.props.id + "/marks";
    LocalApi.put(path, { marks: result })
      .then(res => this.props.handleNewMarks(res.data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container>
        {!this.props.isReadOnly && (
          <Row className="mt-5">
            <Col>
              <Tags
                handleSelect={t => this.setState({ selectedTag: t })}
                selectedTag={this.state.selectedTag}
              />
            </Col>
          </Row>
        )}
        <Row className="mt-5">
          <Col md={12} xl={8}>
            <Canvas
              marks={this.props.marks}
              handleNewCoordinate={this.handleNewCoordinate}
              imageSrc={this.props.imageSrc}
              hoveredCoordinates={this.state.hoveredCoordinates}
            />
          </Col>
          <Col>
            <h2>Marks</h2>
            <Marks
              marks={this.props.marks}
              handleHoverCoordinates={this.handleHoverCoordinates}
              handleDeleteCoordinates={this.handleDeleteCoordinates}
              isReadOnly={this.props.isReadOnly}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ImageAnnotation;