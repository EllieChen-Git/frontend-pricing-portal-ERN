import React, { Component } from "react";
import LocalApi from "../../apis/LocalApi";
import { Form, Button, Container } from "react-bootstrap";

class EditImage extends Component {
  state = {
    lot: 0,
    unitNumber: "",
    productDescription: ""
  };

  componentDidMount() {
    LocalApi.get("/images/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          lot: response.data.lot,
          unitNumber: response.data.unitNumber,
          productDescription: response.data.productDescription
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  imageEditHandler = event => {
    event.preventDefault();
    const { lot, unitNumber, productDescription } = this.state;

    LocalApi.patch(`/images/${this.props.match.params.id}`, {
      lot: lot,
      unitNumber: unitNumber,
      productDescription: productDescription
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    this.props.history.push("/images");
  };

  onInputChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { lot, unitNumber, productDescription } = this.state;

    return (
      <Container>
        <h3 className="text-center" style={{ fontSize: "2.5rem" }}>
          Edit Apartment
        </h3>
        <Form
          onSubmit={this.imageEditHandler}
          style={{ width: "40%", margin: "auto" }}
        >
          <Form.Group>
            <Form.Label
              style={{
                fontSize: "1.5em",
                padding: "3px",
                fontWeight: "normal"
              }}
            >
              Lot:
            </Form.Label>
            <Form.Control
              type="number"
              min="1"
              value={lot}
              required="required"
              onChange={event => this.onInputChange("lot", event)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label
              style={{
                fontSize: "1.5em",
                padding: "3px",
                fontWeight: "normal"
              }}
            >
              Unit Number:
            </Form.Label>
            <Form.Control
              type="text"
              value={unitNumber}
              placeholder="Enter Unit Number"
              required="required"
              onChange={event => this.onInputChange("unitNumber", event)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label
              style={{
                fontSize: "1.5em",
                padding: "3px",
                fontWeight: "normal"
              }}
            >
              Product Description:{" "}
            </Form.Label>
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

          <Button variant="info" type="submit">
            Edit Apartments
          </Button>
        </Form>
      </Container>
    );
  }
}

export default EditImage;
