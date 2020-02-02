import React, { Component } from "react";
import LocalApi from "../../apis/LocalApi";
import { Form, Button, Container } from "react-bootstrap";

class EditImage extends Component {
  state = {
    selectedFile: null,
    lot: 0,
    unitNumber: "",
    productDescription: ""
  };

  //When loading this page, retrive the data for this particular apartment from backend
  componentDidMount() {
    LocalApi.get(`${process.env.REACT_APP_BASEURL}/images/`)
      .then(response => {
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i]._id === this.props.match.params.id) {
            this.setState({
              lot: response.data[i].lot,
              unitNumber: response.data[i].unitNumber,
              productDescription: response.data[i].productDescription
            });
          }
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  imageEditHandler = event => {
    event.preventDefault();
    const { lot, selectedFile, unitNumber, productDescription } = this.state;

    LocalApi.post(`/images/edit/${this.props.match.params.id}`, {
      lot: lot,
      selectedFile: selectedFile[0].name,
      unitNumber: unitNumber,
      productDescription: productDescription
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    this.props.history.push("/");
  };

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files
    });
  };

  onInputChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { lot, unitNumber, productDescription } = this.state;

    return (
      <Container>
        <h3>Edit Apartments</h3>
        <Form onSubmit={this.imageEditHandler}>
          <Form.Group>
            <Form.Label>Lot:</Form.Label>
            <Form.Control
              type="number"
              min="1"
              value={lot}
              required="required"
              onChange={event => this.onInputChange("lot", event)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Unit Number:</Form.Label>
            <Form.Control
              type="text"
              value={unitNumber}
              placeholder="Enter Unit Number"
              required="required"
              onChange={event => this.onInputChange("unitNumber", event)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Product Description: </Form.Label>
            <Form.Control
              type="text"
              value={productDescription}
              placeholder="Enter Product Description"
              required="required"
              onChange={event =>
                this.onInputChange("productDescription", event)
              }
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Floor Plan: </Form.Label>
            <Form.Control
              type="file"
              required="required"
              multiple
              onChange={this.fileSelectedHandler}
            />
          </Form.Group>
          <Button variant="info" type="submit">
            Edit Apartments
          </Button>
        </Form>
      </Container>
    );
  }
}

export default EditImage;
