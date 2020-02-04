import React, { Component } from "react";
import Tags from "./Tags";
import Canvas from "./Canvas";
import LocalApi from "./../../apis/LocalApi";
import Marks from "./Marks"

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
    // console.log(coordinates);
    this.setState({hoveredCoordinates: coordinates})
    console.log(this.state.hoveredCoordinates)
  }


  render() {
    const data = {
      image: this.props.imageSrc,
      marks: this.props.marks
    };

    return (
      <>
        <div>
          {!this.props.isReadOnly && (
            <Tags
              handleSelect={t => this.setState({ selectedTag: t })}
              selectedTag={this.state.selectedTag}
            />
          )}
          <Canvas
            marks={this.props.marks}
            handleNewCoordinate={this.handleNewCoordinate}
            imageSrc={this.props.imageSrc}
            hoveredCoordinates={this.state.hoveredCoordinates}
          />
          <Marks
            marks={this.props.marks}
            handleHoverCoordinates={this.handleHoverCoordinates}
          />
        </div>
        <div>
          <h4>Data</h4>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </>
    );
  }
}

export default ImageAnnotation;
