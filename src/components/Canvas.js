import React, {Component} from 'react';


const imageSrc = "https://www.the-homestore.com/wp-content/uploads/2014/12/Bainbridge1.jpg";


class Canvas extends Component {
    constructor(props) {
        super(props);
        // Create placeholder for HTML Element reference.
        this.canvasRef = React.createRef();
        this.state = {imageSrc: imageSrc};
    }
    
    componentDidMount() {
      
    }

    componentDidUpdate() {
        const cv = this.canvasRef.current;
        //returns a drawing context on the canvas
        const ctx = cv.getContext("2d");
        //method of the Canvas 2D
        ctx.clearRect(0, 0, cv.width, cv.height);
        //draw an image onto the canvas(image, dx, dy, dWidth, dHeight)
        ctx.drawImage(this.state.image, 0, 0, cv.width, cv.height);
        ctx.fillStyle = "#009900";
        ctx.font = "16px Courier";
    }

    render() {
      return <canvas
               ref={this.canvasRef}
               width={700} height={600}
            />;
    }
}

export default Canvas;