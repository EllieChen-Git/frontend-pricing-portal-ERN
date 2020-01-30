import React, {Component} from 'react';
import Tags from './Tags';
import Canvas from './Canvas'

class ImageAnnotation extends Component{
    state = {
      selectedTag: null,
      marks: {}
    };

    // update state with the coordinates
    handleNewCoordinate = (coordinates) => {
      if (!this.state.selectedTag) {
        console.log("No tag selected.");
        return;
      };
      let newMarksState = Object.assign({}, this.state.marks);
      if(!newMarksState[this.state.selectedTag.title]){
        newMarksState[this.state.selectedTag.title] = [];
      };
      newMarksState[this.state.selectedTag.title].push(coordinates);
      this.setState({marks: newMarksState});
    };

    render() {
      const data = {
        image: this.props.imageSrc,
        marks: this.state.marks
      };
      return(
        <>
        <div>
          <Tags
            handleSelect={(t) => this.setState({selectedTag: t})}
            selectedTag={this.state.selectedTag}
          />
          <Canvas
            marks={this.state.marks}
            handleNewCoordinate={this.handleNewCoordinate}
            imageSrc = {this.props.imageSrc}
          />
        </div>
        <div>
          <h4>Data</h4>
           <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
        </>
      )
    }
}

export default ImageAnnotation;