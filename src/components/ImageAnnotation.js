import React, {Component} from 'react';
import Tags from './Tags';
import Canvas from './Canvas';


class ImageAnnotation extends Component{
    render() {
        return(
            <div>
                <Tags />
                <Canvas />    
            </div>
        )
    }
}

export default ImageAnnotation;