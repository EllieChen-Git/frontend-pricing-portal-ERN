import React, {Component} from 'react';
import Tags from './Tags';

const imageSrc = "https://www.the-homestore.com/wp-content/uploads/2014/12/Bainbridge1.jpg";

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
					</div>
      )
    }
}

export default ImageAnnotation;