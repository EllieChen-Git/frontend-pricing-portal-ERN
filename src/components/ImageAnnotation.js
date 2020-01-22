import React, {Component} from 'react';
import Tags from './Tags';
import Canvas from './Canvas'

const imageSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Sample_Floorplan.jpg/800px-Sample_Floorplan.jpg";

class ImageAnnotation extends Component{
    state = {
      selectedTag: null,
      marks: {},
      imageSrc: imageSrc
    };

    render() {
      return(
        <div>
          <Tags
            handleSelect={(t) => this.setState({selectedTag: t})}
            selectedTag={this.state.selectedTag}
          />
          <Canvas
            imageSrc = {this.state.imageSrc}
          />
        </div>
      )
    }
}

export default ImageAnnotation;