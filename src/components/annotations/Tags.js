import React, { Component } from "react";
import LocalApi from "./../../apis/LocalApi";
import {Button} from "react-bootstrap"

// recives a tag and returns it if it's selected
function Tag(props) {
  // Toggle tag: if tag is active and pressed once again, deactivate.
  const clickWrapper = () => props.handleSelect(props.isActive ? null : props.tag);
  return (
    <Button style={{fontSize: "16px"}}
      onClick={clickWrapper}
      variant={props.isActive ? "primary" : "link"}
    >
      {props.tag.title}
    </Button>
  );
}

class NewTag extends Component {
  state = { value: "" };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    LocalApi.post("/tags", {
      tags: [this.state.value]
    })
      .then(this.props.handleUpdate)
      .catch(e => console.log(e));
  };

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Button style={{fontSize: "16px"}} onClick={this.handleSubmit}>Add tag</Button>
      </>
    );
  }
}

class Tags extends Component {
  state = { tags: [] };

  reloadTags = () => {
    LocalApi.get("/tags")
      .then(r => this.setState({ tags: r.data }))
      .catch(e => console.log(e)); 
  };

  componentDidMount() {
    this.reloadTags();
  }

  render() {
    let elements = this.state.tags.map(tag => (
      <Tag
        key={tag._id}
        handleSelect={this.props.handleSelect}
        tag={tag}
        isActive={this.props.selectedTag && tag._id === this.props.selectedTag._id}
      />
    ));
    return (
      <div style={{fontSize: "20px"}}>
        Tags: {elements}
        <NewTag handleUpdate={this.reloadTags} />
      </div>
    );
  }
}

export default Tags;