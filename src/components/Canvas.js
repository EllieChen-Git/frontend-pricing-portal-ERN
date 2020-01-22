import React, {Component} from 'react';

class Canvas extends Component {
    constructor(props) {
      super(props);
      // Create placeholder for HTML Element reference.
      this.canvasRef = React.createRef();
      this.state = {image: null};
    }

    handleMouseUp = (e) => {
      // currentTarget is a html element of the canvas
      // call getBoundingClientRect() to get the size of the canvas
			let currentTargetRect = e.currentTarget.getBoundingClientRect();
			const coordinates = {
        //nativeEvent synthetic event, a wrapper around the browser's native events
        // normalizing coordinates 
				x: e.nativeEvent.offsetX / currentTargetRect.width,
				y: e.nativeEvent.offsetY / currentTargetRect.height
			};
			console.log(coordinates);
    }
    
    reloadImage(src) {
      let img = new Image();
      img.src = src;
      // create cb function that updates state, assign this function 
      // to image.onload instance variable. Image will call this instance variable 
      // when the image is loaded and ready for use. 
      img.onload = () => this.setState({image: img});
    }

    componentDidMount() {
      this.reloadImage(this.props.imageSrc)
    }

    componentDidUpdate() {
			// !need to search more about prevProps for checking prev and current image   
			// returns a drawing context on the canvas
			const cv = this.canvasRef.current;
			//method of the Canvas 2D
      const ctx = cv.getContext("2d");
      ctx.clearRect(0, 0, cv.width, cv.height);
      ctx.drawImage(this.state.image, 0, 0, cv.width, cv.height);
      ctx.fillStyle = "#009900";
      ctx.font = "16px Courier";
		}

    render() {
      return(
				<div>
				<canvas
					onMouseUp={this.handleMouseUp}
					ref={this.canvasRef}
					// need to search about resolution for images
					width={700} height={600}
				/>;
			</div>
			)
    }
}

export default Canvas;