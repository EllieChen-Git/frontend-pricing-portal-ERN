import React from 'react'
const axios = require("axios");

class ReactUploadImage extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            file: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onFormSubmit(e){
    //this prevents from the form rendering whenever someone inputs into the form. 
        e.preventDefault();
//this creates a new formDate variable and creates a new FormData. 
        const formData = new FormData();
//to our form data, we add the arguments "MyImage and this.state.file"
        formData.append('myImage',this.state.file);
        console.log(formData)
//we create an object called config, which takes a header, with the content type that allows us to upload images. 
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        console.log(config)
//we attempt to post to localhost 5000, our image.
        axios.post("http://localhost:5000/images",formData,config)
            .then((response) => {
                console.log(response)
//if this works we get an alert that this is successful. 
                alert("The file is successfully uploaded");
            }).catch((error) => {
                console.log(error)
//otherwise, we console.log our error. 
                
        });
    }
//we create an onChange function. 
//we set state to the image that the user uploads. 
    onChange(e) {
        this.setState({file:e.target.files[0]});

    }

    render() {
        return (
//we create a form that takes the value of the image that the user uploads. 
            <form onSubmit={this.onFormSubmit}>
                <h1>File Upload</h1>
                <input type="file" name="myImage" onChange= {this.onChange} />
                <button type="submit">Upload</button>
            </form>
        )
    }
}
//we export the file. 
export default ReactUploadImage