import React, {Component} from 'react';
import LocalApi from '../apis/LocalApi';

// recives a tag and returns it if it's selected
function Tag(props) {
  const clickWrapper = () => props.handleSelect(props.tag);
  return <button onClick={clickWrapper}>{props.tag.title}</button>;
}

class NewTag extends Component{
  state = {value: ""};

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    LocalApi.post('/tags', {
      tags: [this.state.value]
    })
    .then(this.props.handleUpdate)
    .catch((e) => console.log(e));  // TODO: Proper Error handling.
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

class Tags extends Component{
    state = {tags: []};

    reloadTags = () => {
      LocalApi.get("/tags")
      .then((r) => this.setState({tags: r.data}))
      .catch((e) => console.log(e));  // TODO: Proper Error handling.
    }
    
    componentDidMount(){
        this.reloadTags();
    }
 
    render() {
      let elements = this.state.tags.map(
        (tag) => <Tag key={tag._id} handleSelect={this.props.handleSelect} tag={tag}/>);
      return (
        <div>
          Tags: {elements} |  
          <button onClick={this.reloadTags}>Reload</button>
          <button onClick={() => this.props.handleSelect(null)}>Clear Selected</button> |
          <NewTag handleUpdate={this.reloadTags} />
          <br/>
          {this.props.selectedTag && <h3>Selected tag: {this.props.selectedTag.title}</h3>}
        </div>);
    }
}

export default Tags;